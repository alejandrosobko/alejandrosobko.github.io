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
} from "@chakra-ui/react"
import { ListIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <IconButton
        aria-label="Open menu"
        icon={<ListIcon />}
        colorScheme="gray"
        onClick={() => setIsOpen(!isOpen)}
      />

      <Drawer
        placement="right"
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
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
                onClick={() => setIsOpen(false)}
                passHref
              >
                About
              </Link>
              <Link
                href={"#services"}
                style={{ fontWeight: "bold" }}
                onClick={() => setIsOpen(false)}
                passHref
              >
                Services
              </Link>
              <Link
                href={"#projects"}
                style={{ fontWeight: "bold" }}
                onClick={() => setIsOpen(false)}
                passHref
              >
                Projects
              </Link>
              <Link
                href={"mailto:alejandro.sobko@gmail.com"}
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  setIsOpen(false)
                  event("click", { location: "mobile-contact" })
                }}
              >
                Contact
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default MobileNavbar
