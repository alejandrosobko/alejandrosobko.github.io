import { event } from "@/lib/gtag"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

const DesktopNavbar = () => {
  return (
    <Flex gap={6} display={{ base: "none", md: "flex" }}>
      <Link href={"#about"} style={{ fontWeight: "bold" }}>
        About
      </Link>
      <Link href={"#services"} style={{ fontWeight: "bold" }}>
        Services
      </Link>
      <Link href={"#projects"} style={{ fontWeight: "bold" }}>
        Projects
      </Link>
      <Link
        href={"mailto:alejandro.sobko@gmail.com"}
        style={{ fontWeight: "bold" }}
        onClick={() => {
          event("click", { location: "desktop-contact" })
        }}
      >
        Contact
      </Link>
    </Flex>
  )
}

export default DesktopNavbar
