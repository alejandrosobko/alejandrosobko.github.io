import { Flex, IconButton, Text } from "@chakra-ui/react"
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import Link from "next/link"

const Footer = () => {
  return (
    <Flex
      bgColor={"#f8fafc"}
      py={16}
      justifyContent={"space-between"}
      px={12}
      borderTop={"1px solid #e2e8f0"}
    >
      <Text fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} Alejandro Sobko. All rights reserved.
      </Text>

      <Flex gap={4}>
        <Link href="https://alejandrosobko.com" target="_blank">
          <IconButton
            aria-label="Github"
            icon={<GithubLogoIcon size={22} />}
            variant="ghost"
            colorScheme="gray"
            size="sm"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alejandrosobko/"
          target="_blank"
        >
          <IconButton
            aria-label="Linkedin"
            icon={<LinkedinLogoIcon size={22} />}
            variant="ghost"
            colorScheme="gray"
            size="sm"
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
