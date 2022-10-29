import Link from "next/link";
import Image from "next/dist/client/image";

export default function Section2() {
  return (
    <div className=" py-24    bg-gray-50  ">
      <h1 className="  max-w-2xl sm:px-6  mb-8 px-4 text-center lg:text-left  mx-auto text-4xl lg:max-w-6xl lg:px-12  ">
        Demonio's <br></br>
        <span className="font-bold text-custom">Roadmap</span>
      </h1>{" "}
      <div className="max-w-2xl mx-auto  px-4   items-center   gap-y-16  sm:px-6   lg:max-w-6xl lg:px-12  ">
        <div className="w-full bg-white rounded-sm  py-6 px-4 ">
          <details className="mb-4">
            <summary className="font-semibold cursor-pointer bg-custom text-secondary rounded-md py-4 px-4">
              Are you in search of a breath of fresh air in the NFT Space?
            </summary>

            <span>
              <div className="bg-white rounded-sm  py-6 px-4  ">
                <p className="text-md text-gray-800 text-justify">
                  If yes, then DEMONIO NFT Project is ideal because it is an
                  exceptional NFT acquisition that induces a sense of
                  refreshment in the NFT space that will impact influential
                  investors worldwide.
                </p>
              </div>
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold cursor-pointer bg-custom text-secondary rounded-md py-4 px-4">
              Do you prefer investing in an NFT with huge growth potential? Good
              news!{" "}
            </summary>

            <span>
              <div className="bg-white rounded-sm  py-6 px-4  ">
                <p className="text-md text-gray-800 text-justify">
                  Demonio NFT collection comprises of some traits with 1%
                  rarity. Social media growth and community engagement has been
                  phenomenal.{" "}
                </p>
              </div>
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold cursor-pointer bg-custom text-secondary rounded-md py-4 px-4">
              Did you know that DEMONIO NFT has gotten it all together and built
              a plan for the future as well?
            </summary>

            <span>
              <div className="bg-white rounded-sm  py-6 px-4  ">
                <p>Here's how:</p>
                <p className="font-bold my-8 text-xl text-custom inline-block p-2 bg-secondary">
                  Demonio's Mission
                </p>
                <p className="text-md text-gray-800 text-justify">
                  To become one of the top 10 ranked NFTs within one(1) year by
                  creating unprecedented value for digital investors through
                  meaningful content, refreshing the NFT Space whilst making a
                  difference{" "}
                </p>
              </div>

              <div className="bg-white rounded-sm my-8 py-6 px-4  ">
                <p className="font-bold my-8 text-xl text-custom inline-block p-2 bg-secondary">
                  Demonio's Goals{" "}
                </p>

                <ul className=" list-outside  list-disc text-md text-gray-800 text-justify">
                  <li>
                    {" "}
                    Achieve 5x economic value for digital investors within 3
                    months of NFT Launch.
                  </li>{" "}
                  <li>
                    Achieve 10x economic value for digital investors within 6
                    months of NFT Launch.
                  </li>{" "}
                  <li>
                    Become a top 10 ranked NFT project with a well known and
                    popular brand in the NFT Space.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-sm  my-8 py-6 px-4  ">
                <p className="font-bold my-8 text-xl text-custom inline-block p-2 bg-secondary">
                  Demonio's Strategies
                </p>

                <ul className=" list-outside list-disc text-md text-gray-800 text-justify">
                  <li>
                    Presale extensive Marketing, Promotions and Value
                    Propositions aimed at inspiring and engaging digital
                    investors in the NFT space.
                  </li>
                  <li>
                    Sweeping Floor Price - 25ETH community fund to be created
                    for the sole purpose of re investing in DEMONIO NFTs to
                    sweep the floor price and achieve parabolic growth.
                  </li>
                  <li>
                    Post Launch - Sustained Marketing and Promotions- 15% of
                    Royalities to be reinvested in a sustained marketing
                    campaign to drive sales in the secondary market.
                  </li>
                  <li>
                    Overall and continual development of the DEMONIO NFT Brand
                    in the NFT Space.
                  </li>
                </ul>
              </div>
            </span>
          </details>{" "}
          <details className="mb-4">
            <summary className="font-semibold cursor-pointer bg-custom text-secondary rounded-md py-4 px-4">
              Looking for a high valued NFT creation in ETH blockchain-based?
            </summary>

            <span>
              <div className="bg-white rounded-sm  py-6 px-4  ">
                <p className="text-md text-gray-800 text-justify">
                  Say no more!
                </p>
                <p className="text-md text-gray-800 text-justify">
                  Demonio NFT is one! Investors will profit from diverse
                  investment opportunities, community support, and premium brand
                  perks.
                </p>{" "}
                <p className="text-md text-gray-800 text-justify">
                  Now what? Put your money and trust in DEMONIO NFT and secure
                  your future.
                </p>
              </div>
            </span>
          </details>
        </div>
      </div>
    </div>
  );
}
