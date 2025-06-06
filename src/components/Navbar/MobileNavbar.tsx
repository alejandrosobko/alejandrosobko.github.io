import { event } from "@/lib/gtag"
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { ListIcon } from "@phosphor-icons/react"
import Link from "next/link"

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <IconButton
        aria-label="Open menu"
        icon={<ListIcon />}
        colorScheme="gray"
        onClick={onOpen}
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <Stack gap={6}>
              <Link
                href={"#about"}
                style={{ fontWeight: "bold" }}
                onClick={onClose}
              >
                Sobre mi
              </Link>
              <Link
                href={"#services"}
                style={{ fontWeight: "bold" }}
                onClick={onClose}
              >
                Servicios
              </Link>
              <Link
                href={"#projects"}
                style={{ fontWeight: "bold" }}
                onClick={onClose}
              >
                Proyectos
              </Link>
              <Link
                href={"mailto:alejandro.sobko@gmail.com"}
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  onClose()
                  event("click", { location: "mobile-contact" })
                }}
              >
                Contacto
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default MobileNavbar
