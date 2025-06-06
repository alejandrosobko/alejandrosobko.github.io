import { Flex, Text } from "@chakra-ui/react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {
  return (
    <Flex
      bgColor="#fcfdfe"
      padding={4}
      justifyContent="space-between"
      alignItems={"center"}
      px={{ base: 4, md: 16 }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      backdropFilter="blur(10px)"
      bg={"rgba(255, 255, 255, 0.8)"}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Alejandro Sobko
      </Text>

      <MobileNavbar />
      <DesktopNavbar />
    </Flex>
  )
}

export default Navbar
