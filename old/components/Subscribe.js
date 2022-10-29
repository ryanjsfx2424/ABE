import { useState, useEffect, Component } from 'react';
import Web3 from 'web3'
import Web3EthContract from 'web3-eth-contract'
import abeContractABI from '../json/abe_v2_abi.json'
import usdcGoerliContractABI from '../json/usdc_goerli_abi.json'
import Link from 'next/link'
import {
  ChakraProvider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import Header from '../components/Header';

const CHAIN_ID = 5
const CHAIN_NAME = "GOERLI"
// const ABE_CONTRACT_ADDRESS = "0xf6FDF36e31342440BD2A03e7cd63DeA165C578C9"
const ABE_CONTRACT_ADDRESS = "0x7694E33372b98751fbDc9758fC29BF55B6Ff2e1f"
const USDC_GOERLI_CONTRACT_ADDRESS_PROXY = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F" // this proxies the below
const USDC_GOERLI_CONTRACT_ADDRESS = "0xe27658a36cA8A59fE5Cc76a14Bde34a51e587ab4"
const WEI_PER_ETH = 1e18
const WEI_PER_USDC = 1e6

export default function Subscribe({conversions, abe_guild_data_db, guild_id, guild_name}) {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isCorrectChain, setIsCorrectChain] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [monthInd, setMonthInd] = useState(0)

  const ABE_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1014177171008409660&permissions=19456&scope=bot";

  // console.log("20 section3b guild_id: ", guild_id)

  // console.log("abe_guild_data_db: ", abe_guild_data_db)

  const usdCosts = [100, 250, 300]
  const usdCostsToNames = {100:"Basic", 250:"Standard", 300:"Premium"}
  const MonthTexts = ["1 Month", "3 Months (5% off)", "6 Months (10% off)", "9 Months (15% off)", "12 Months (20% off)"]
  const MonthFractions = [1, 0.95, 0.9, 0.85, 0.8]
  const MonthNums = [1, 3, 6, 9, 12]

  let ethCosts = []
  for (var ii = 0; ii < usdCosts.length; ii++) {
      ethCosts.push( (usdCosts[ii] / conversions["USD"]).toFixed(2) )
  }

  const updateDb = async (totalCost, costPerMonth, discountFraction, numMonths, type, name) => {
    console.log("in updateDB guild_id: ", guild_id)
    await fetch("/api/abe-guilds-data", {
      method: "POST",
      body: JSON.stringify({
        "total_cost": totalCost,
        "cost_per_month": costPerMonth,
        "discount_fraction": discountFraction,
        "num_months": numMonths,
        "type": type,
        "name": name,
        "guild_id": guild_id,
        "guild_name": guild_name,
        "date": Date(),
        "subscribed":true})
    })
    setIsSubscribed(true)
  }

  const connectWallet = async () => {
    if (window.ethereum) {
        console.log("has window ethereum");

        var account;
        try {
            account = await window.ethereum.request({method: 'eth_accounts'})
            console.log("got account: ", account)
        } catch {
            alert("error grabbing account")
            console.log("error grabbing account");
            account = "";
            return {success: false}
        }

        if (account.length > 0) {
            var chainId;
            try {
                chainId = await window.ethereum.request({method: 'net_version'})
            } catch {
                alert("error grabbing account")
                console.log("error grabbing account");
                chainId = -1;
                return {success: false}
            }

            setIsWalletConnected(true)

            if (Number(chainId) === CHAIN_ID) {
                setIsCorrectChain(true)
                return {success: true}
            } else {
                setIsCorrectChain(false)
                alert("Change chain to " + CHAIN_NAME);
                return {success: false}
            }
        } else {
            setIsWalletConnected(false)
            setIsCorrectChain(false)
            alert("Could not get account - have you logged into metamask?")
            return {success: false}
        }
    } else {
        alert("install metamask extension!!");
        return {success: false}
    }
  };

  const subscribe = async(cost, type) => {
      if (CHAIN_ID === 5) {
          cost = cost / 10000
      }
      console.log("78 cost: ", cost)
      Web3EthContract.setProvider(window.ethereum);
      const web3 = new Web3(window.ethereum);

      const abeSmartContractObj = new Web3EthContract(abeContractABI, ABE_CONTRACT_ADDRESS);
      let usdcGoerliSmartContractObj
      let allowance
      if (type === "usdc") {
        cost = String(Math.round(cost*WEI_PER_USDC))
        usdcGoerliSmartContractObj = new Web3EthContract(usdcGoerliContractABI, USDC_GOERLI_CONTRACT_ADDRESS_PROXY);
        
        try {
          allowance = await usdcGoerliSmartContractObj.methods.allowance(window.ethereum.selectedAddress, ABE_CONTRACT_ADDRESS).call()
        } catch (err) {
          console.log("89 allowance err: ", err)
          let message = "😥 Something went wrong checking usdc allowance"
          alert(message)
          return {success: false, message: message, err: err}
        }
        console.log("allowance: ", allowance)
        let maxCost = String(Math.round(1.1*Math.max(...usdCosts)*WEI_PER_USDC))
        console.log("maxCost: ", maxCost)
        if (Number(allowance) < Number(maxCost)) {

          let gasLimitEstimate
          try {
              gasLimitEstimate = await usdcGoerliSmartContractObj.methods.approve(ABE_CONTRACT_ADDRESS, maxCost).estimateGas({
                  from: window.ethereum.selectedAddress,
                  value: String(0),
              })
          } catch (err) {
              console.log("107 approve gasLimitEstimate err: ", err);
              let message = "😥 Something went wrong estimating gas limit, usdc approval"
              alert(message);
              return {success: false, message: message, err: err}
          }
          console.log("gasLimitEstimate approve: ", gasLimitEstimate)

          let gasPriceEstimate
          try {
            gasPriceEstimate = await web3.eth.getGasPrice();
          } catch (err) {
              console.log("117 getGasPrice err: ", err)
              let message = "😥 Something went wrong estimating gas price for usdc approval"
              alert(message);
              return {success: false, message: message, err: err}
          }
          console.log("gasPriceEstimate approve: ", gasPriceEstimate)

          try {
              await usdcGoerliSmartContractObj.methods.approve(ABE_CONTRACT_ADDRESS, maxCost).send({
                  gasLimit: String(Math.round(1.2 * gasLimitEstimate)),
                  gasPrice: String(Math.round(1.2 * gasPriceEstimate)),
                  to: USDC_GOERLI_CONTRACT_ADDRESS_PROXY,
                  from: window.ethereum.selectedAddress,
                  value: String(0)
              })
          } catch (err) {
              console.log("132 approve err: ", err)
              let message = "😥 Something went wrong trying to increase usdc approval"
              alert(message);
              return {success: false, message: message, err: err}
          }
        }
      } else {
        cost = String(Math.round(cost*WEI_PER_ETH))
      }

      let gasLimitEstimate;
      if (type === "eth") {
        try {
          console.log("address: ", window.ethereum.selectedAddress)
          console.log("cost eth: ", cost)
          gasLimitEstimate = await abeSmartContractObj.methods.subscribe_m6L().estimateGas({
              from: window.ethereum.selectedAddress,
              value: cost,
          })
        } catch (err) {
            console.log("96 subscribe err: ", err);
            let message = "😥 Something went wrong estimating gas limit, eth"
            alert(message);
            return {success: false, message: message, err: err}
        }
      } else if (type === "usdc") {
        try {
            console.log("address: ", window.ethereum.selectedAddress)
            console.log("cost usdc: ", cost)
            console.log("contract: ", USDC_GOERLI_CONTRACT_ADDRESS_PROXY)
            gasLimitEstimate = await abeSmartContractObj.methods.subscribeToken_Hd16(USDC_GOERLI_CONTRACT_ADDRESS_PROXY, cost).estimateGas({
                from: window.ethereum.selectedAddress,
                value: String(0),
            })
        } catch (err) {
            console.log("110 subscribe err: ", err);
            let message = "😥 Something went wrong estimating gas limit, usdc"
            alert(message);
            return {success: false, message: message, err: err}
        }
      }
      // above doesn't work for GOERLI. Might work on eth, we'll see.
      // gasLimitEstimate = 120000
      
      console.log("got gasLimitEstimate! ", gasLimitEstimate);
      console.log({
        gasLimitEstimate: gasLimitEstimate,
      });

      let gasPriceEstimate
      try {
        gasPriceEstimate = await web3.eth.getGasPrice();
      } catch (err) {
          console.log("126 subscribe err: ", err)
          let message = "😥 Something went wrong estimating gas price"
          alert(message);
          return {success: false, message: message, err: err}
      }

      console.log({resultOfGasPriceEstimate: gasPriceEstimate});

      if (type === "eth") {
        try {
            const receipt = await abeSmartContractObj.methods.subscribe_m6L().send({
                gasLimit: String(Math.round(1.2 * gasLimitEstimate)),
                gasPrice: String(Math.round(1.2 * gasPriceEstimate)),
                to: ABE_CONTRACT_ADDRESS,
                from: window.ethereum.selectedAddress,
                value: cost});
            console.log("142 subscribe eth receipt: ", receipt);
            console.log({
                success: true,
                status: receipt,
                status2: "SUCCESS",
            })
            return {success: true, message: receipt}
        }
        catch (err) {
            console.log("151 subscribe eth err: ", err);
            let message = "Something went wrong when trying to execute subscribe (eth) smart contract function call"
            alert(message);
            return {success: false, message: message, err: err}
        }
      } else if (type === "usdc") {
        try {
            const receipt = await abeSmartContractObj.methods.subscribeToken_Hd16(USDC_GOERLI_CONTRACT_ADDRESS_PROXY, cost).send({
                gasLimit: String(Math.round(1.2 * gasLimitEstimate)),
                gasPrice: String(Math.round(1.2 * gasPriceEstimate)),
                to: ABE_CONTRACT_ADDRESS,
                from: window.ethereum.selectedAddress,
                value: String(0)});
            console.log("164 subscribe usdc receipt: ", receipt);
            console.log({
                success: true,
                status: receipt,
                status2: "SUCCESS",
            })
            return {success: true, message: receipt}
        }
        catch (err) {
            console.log("173 subscribe usdc err: ", err);
            let message = "Something went wrong when trying to execute subscribe (usdc) smart contract function call"
            alert(message);
            return {success: false, message: message, err: err}
        }
      }
  }

  const buttonHandler = async(costPerMonth, discountFraction, numMonths, type, name) => {
    setIsButtonDisabled(true)
    console.log("button clicked")

    const totalCost = Number((costPerMonth*discountFraction*numMonths).toFixed(2))

    let result
    if (!isWalletConnected) {
      console.log("going to connect wallet")
      result = await connectWallet()
      console.log("done w/ connect wallet")
    }

    if (isWalletConnected || result.success) {
        console.log("going to subscribe")
        result = await subscribe(totalCost, type)
        console.log("done w/ subscribe")
        
        if (result.success) {
            // do the db stuff!
            await updateDb(totalCost, costPerMonth, discountFraction, numMonths, type, name)
            console.log("okay, we need to add this guild to our db with the subscription type, append to times subscribed and append to amounts paid")
        } else {
            console.log("error subscribing")
        }
    }

    setIsButtonDisabled(false)
  }

  const menuItemHandler = async(monthText) => {
      console.log("clicked 315")
      setMonthInd(MonthTexts.indexOf(monthText))
  }

  return (
    <div className='bg-cdark  font-body '>
      <Header />
      <div className='  max-w-2xl sm:px-6   px-4 text-center    mx-auto  font-body    lg:max-w-4xl lg:px-12  '
      >
        <h1 className='font-extrabold capitalize text-2xl md:text-7xl lg:text-6xl text-white py-8'>
          Always be early to NFT projects
        </h1>
      </div>
      <div>
        <div className='max-w-2xl mx-auto  px-4  mx-auto lg:max-w-7xl max-w-2xl sm:px-6    text-lg lg:text-xl  items-center    '>
          <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-cblue2 via-cblue2 to-gray-100  mb-8 mt-8 text-center lg:text-left font-extrabold lg:text-6xl  md:text-5xl text-4xl    '>
            Choose Your Plan
          </h1>

          <div className='grid h-full font-medium gap-8 lg:grid-cols-3 grid-cols-1'>
            <div className=' rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
              <p className='text-3xl font-extrabold'>Basic</p>

              <div className=' 	text-left p-4 grid grid-rows gap-y-8'>
                <p>
                  &#10003; Daily growth recap of all ETH projects monitored in the
                  last 24 hours (Limited for the daily recap
                </p>
                <p>
                  &#10003; Instant notification of Top Tier Alpha Plus ETH
                  Projects
                </p>
              </div>
            </div>{' '}
            <div className='lg:hidden block rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
              ${(usdCosts[0]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
              <p>usdc/month</p>
            </div>
            <div className=' rounded-xl  py-6 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500  '>
              <div className='flex text-center mx-auto  align-middle justify-center items-center  justify-items-center'>
                <img src='./star.png' className='w-4 h-auto my-auto' />
                <p className='text-3xl font-extrabold'>&nbsp; Standard </p>
              </div>

              <div className=' text-left p-4 grid grid-rows gap-y-8'>
                <p>
                  &#10003; In depth daily growth recap of all ETH projects
                  monitored in the last 24 hours (&access to Solana)
                </p>
                <p>
                  &#10003; Instant notification of Top Tier Alpha Plus ETH
                  Projects
                </p>
                <p>
                  &#10003; Ability to choose from multiple categories to embed.
                </p>
                <p>
                  &#10003; Fully customizable embeds (colors, metrics, print outs,
                  pingable roles...)
                </p>
              </div>
            </div>{' '}
            <div className=' lg:hidden block rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
              ${(usdCosts[1]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
              <p>usdc/month</p>
            </div>
            <div className=' rounded-xl py-6  border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
              <p className='text-3xl font-extrabold'>Premium</p>

              <div className=' text-left p-4 grid grid-rows gap-y-8'>
                <p>
                  &#10003; Daily growth recap of all ETH projects monitored in the
                  last 24 hours (Limited for the daily recap)
                </p>
                <p>
                  &#10003; Instant notification of Top Tier Alpha Plus ETH
                  Projects
                </p>
                <p>
                  &#10003; Ability to choose from multiple categories to embed.
                </p>
                <p>
                  &#10003; Fully customizable embeds (colors, metrics, print outs,
                  pingable roles...)
                </p>
                <p>
                  &#10003; Ability to select the criteria and metrics, prior to
                  embedding (follower count, following..)
                </p>
                <p>
                  &#10003; Ability to add the following categories to embed
                  (Tools, DAOs and all new categories)
                </p>
              </div>
            </div>{' '}
            <div className='lg:hidden block rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
              ${(usdCosts[2]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
              <p>usdc/month</p>
            </div>
          </div>

          <div className=' grid lg:grid-cols-3 gap-8 grid-cols-1 '>
            <button onClick={() => {buttonHandler(usdCosts[0], MonthFractions[monthInd], MonthNums[monthInd], "usdc", "basic")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                ${(usdCosts[0]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>usdc/month</p>
              </div>
            </button>
            <button onClick={() => {buttonHandler(usdCosts[1], MonthFractions[monthInd], MonthNums[monthInd], "usdc", "standard")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
                ${(usdCosts[1]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>usdc/month</p>
              </div>
            </button>
            <button onClick={() => {buttonHandler(usdCosts[2], MonthFractions[monthInd], MonthNums[monthInd], "usdc", "premium")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                ${(usdCosts[2]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>usdc/month</p>
              </div>
            </button>
          </div>
          <div className=' grid lg:grid-cols-3 gap-8 grid-cols-1 '>
            <button onClick={() => {buttonHandler(ethCosts[0], MonthFractions[monthInd], MonthNums[monthInd], "eth", "basic")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                {(ethCosts[0]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>eth/month</p>
              </div>
            </button>
            <button onClick={() => {buttonHandler(ethCosts[1], MonthFractions[monthInd], MonthNums[monthInd], "eth", "standard")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
                {(ethCosts[1]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>eth/month</p>
              </div>
            </button>
            <button onClick={() => {buttonHandler(ethCosts[2], MonthFractions[monthInd], MonthNums[monthInd], "eth", "premium")}} disabled={isButtonDisabled}>
              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                {(ethCosts[2]*MonthFractions[monthInd]*MonthNums[monthInd]).toFixed(2)}
                <p>eth/month</p>
              </div>
            </button>
          </div>
          
          <p className='text-xl text-center font-light text-white'>
            Note: Prices above based on a month to month subscription. Discounts
            apply for 3 months, 6 months and 12 months pre-paid plans. Get in
            touch to find out more!
          </p>

          {!isSubscribed ?

              <div className=' grid lg:grid-cols-3 gap-8 grid-cols-1 pb-64'>
                  <Menu>  
                          <MenuButton>
                              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                                  {MonthTexts[monthInd]}
                              </div>
                          </MenuButton>
                          
                          <MenuList style={{backgroundColor: "#25324C"}}>
                              {MonthTexts.map((monthText) => (
                                <MenuItem onClick={() => {menuItemHandler(monthText)}}>{monthText}</MenuItem>
                              ))}
                          </MenuList>
                    
                  </Menu>
                  <Menu>
                          <MenuButton>
                              <div className=' lg:block hidden  rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
                                  {MonthTexts[monthInd]}
                              </div>
                          </MenuButton>
                          <MenuList style={{backgroundColor: "rgb(59 130 246)"}}>
                              {MonthTexts.map((monthText) => (
                                <MenuItem onClick={() => {menuItemHandler(monthText)}}>{monthText}</MenuItem>
                              ))}
                          </MenuList>
                      </Menu>
                  
                      <Menu>
                          <MenuButton>
                              <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                                  {MonthTexts[monthInd]}
                              </div>
                          </MenuButton>
                          <MenuList style={{backgroundColor: "#25324C"}}>
                              {MonthTexts.map((monthText) => (
                                  <MenuItem onClick={() => {menuItemHandler(monthText)}}>{monthText}</MenuItem>
                              ))}
                          </MenuList>
                      </Menu>
                  
              </div>
          :
              <div className=' grid lg:grid-cols-3 gap-8 grid-cols-1 '>
                  <div className=' lg:block hidden  rounded-xl py-2 text-xl border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                    <Link href={'/'}>Home</Link>
                  </div>
                  <div className=' lg:block hidden  rounded-xl text-2xl font-bold py-2 my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-br  from-cblue2 via-cblue2 to-blue-500   '>
                    <a href={ABE_INVITE_LINK + "&guild_id=" + guild_id}>Add</a> 
                  </div>
                  <div className=' lg:block hidden  rounded-xl py-2 text-xl my-4 border border-white border-opacity-20 text-center text-white bg-gradient-to-t  from-gr1 via-gr2 to-gr3  '>
                    <Link href={'/settings/' + String(guild_name).toLowerCase() + '/' + guild_id}>Settings</Link>
                  </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}
