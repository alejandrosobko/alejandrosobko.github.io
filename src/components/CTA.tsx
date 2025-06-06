import { event } from "@/lib/gtag"
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { EnvelopeIcon } from "@phosphor-icons/react"
import Link from "next/link"

const CTA = () => {
  return (
    <Flex
      bgColor={"#f6f8fb"}
      direction={{ base: "column", md: "row" }}
      gap={4}
      py={24}
      px={8}
    >
      <Stack spacing={4} maxW={"4xl"} margin={"auto"}>
        <Heading variant={"primary"}>Let&apos;s Work Together</Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Have a project in mind? I&apos;m currently available for freelance
          work and consulting.
        </Text>

        <Flex
          gap={4}
          mt={8}
          direction={{ base: "column", md: "row" }}
          margin="auto"
        >
          <Button
            variant="primary"
            gap={4}
            w={"300px"}
            h={"45px"}
            as={Link}
            href="mailto:alejandro.sobko@gmail.com"
            onClick={() => {
              event("click", { location: "cta-email" })
            }}
          >
            <EnvelopeIcon />
            Email Me
          </Button>
          <Button
            variant="secondary"
            w={"300px"}
            h={"45px"}
            as={Link}
            href="https://www.linkedin.com/in/alejandrosobko/"
            target="_blank"
            onClick={() => {
              event("click", { location: "cta-linkedin" })
            }}
          >
            Connect on LinkedIn
          </Button>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default CTA
