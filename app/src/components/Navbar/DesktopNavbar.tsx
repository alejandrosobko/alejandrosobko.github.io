import { event } from "@/lib/gtag"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

const DesktopNavbar = () => {
  return (
    <Flex gap={6} display={{ base: "none", md: "flex" }}>
      <Link href={"#about"} style={{ fontWeight: "bold" }}>
        Sobre mi
      </Link>
      <Link href={"#services"} style={{ fontWeight: "bold" }}>
        Servicios
      </Link>
      <Link href={"#projects"} style={{ fontWeight: "bold" }}>
        Proyectos
      </Link>
      <Link
        href={"mailto:alejandro.sobko@gmail.com"}
        style={{ fontWeight: "bold" }}
        onClick={() => {
          event("click", { location: "desktop-contact" })
        }}
      >
        Contacto
      </Link>
    </Flex>
  )
}

export default DesktopNavbar
