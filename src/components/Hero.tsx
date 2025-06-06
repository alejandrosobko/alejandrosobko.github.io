import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { event } from "@/lib/gtag"

const Hero = () => {
  return (
    <Flex
      minH={{ base: "100dvh", md: "60dvh" }}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgColor={"#f8fafc"}
      direction={{ base: "column", md: "row" }}
      mt={"50px"}
    >
      <Flex maxW={"xl"} direction={"column"} gap={4} px={8}>
        <Heading
          as="h1"
          fontSize={{ base: "50px", md: "60px" }}
          fontWeight="bold"
          lineHeight={{ base: "50px", md: "55px" }}
          background={"linear-gradient(90deg, #023c68, #e336ed)"}
          backgroundClip="text"
        >
          Independent Software Developer
        </Heading>
        <Text fontSize="lg" color="gray.600">
          I help businesses transform their ideas into robust, scalable software
          solutions that drive growth and efficiency.
        </Text>
        <Flex gap={4} mt={8}>
          <Button
            variant="primary"
            gap={4}
            as={Link}
            href="mailto:alejandro.sobko@gmail.com"
            onClick={() => {
              event("click", { location: "hero-contact" })
            }}
          >
            <Text>Work with me</Text> <ArrowRightIcon />
          </Button>
          <Button
            variant="secondary"
            as={Link}
            href="https://www.linkedin.com/in/alejandrosobko/"
            target="_blank"
          >
            View my work
          </Button>
        </Flex>
      </Flex>

      <Flex
        borderRadius="full"
        overflow="hidden"
        width={{ base: "200px", md: "400px" }}
        height={{ base: "200px", md: "400px" }}
        position="relative"
      >
        <Image
          src={'https://alejandrosobko.github.io/profile.webp'}
          alt="Profile Image"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      </Flex>
    </Flex>
  )
}

export default Hero
