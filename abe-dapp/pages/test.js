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

export default function Test() {
    return (
        <ChakraProvider>
            <Flex direction="row">
                <Flex direction="column">
                    <h1 className="redBkg">Available Feeds</h1>
                    <h1 className="blueBkg">alpha-plus</h1>
                    <h1 className="greenBkg">alpha</h1>
                </Flex>

                <Flex direction="column">
                    <h1 className="blueBkg">Channel to publish in</h1>
                    <h1 className="greenBkg">solana</h1>
                    <h1 className="redBkg">daos</h1>
                </Flex>

                <Flex direction="column">
                    <h1 className="greenBkg">Role to notify</h1>
                    <h1 className="redBkg">@nft-tools</h1>
                    <h1 className="blueBkg">@daos</h1>
                </Flex>

            </Flex>
        </ChakraProvider>
    )
}