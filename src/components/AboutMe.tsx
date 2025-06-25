import { Badge, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

const AboutMe = () => {
  const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "REST APIs",
    "GraphQL",
  ]

  return (
    <Flex
      id="about"
      minH={"60dvh"}
      bgColor={"#f1f5f9"}
      direction={{ base: "column", md: "row" }}
      gap={4}
      py={12}
      px={8}
      scrollMarginTop="40px"
    >
      <Stack spacing={4} maxW={"4xl"} margin={"auto"}>
        <Heading variant={"primary"}>About Me</Heading>
        <Text fontSize="lg" color="gray.800">
          Hey! 👋🏻 I&apos;m Alejandro Sobko, a software developer based in
          Argentina.
        </Text>
        <Text fontSize="lg" color="gray.800">
          Over the years, I&apos;ve worked on a variety of projects in different
          roles — both as part of a team and as a freelancer. My last
          contribution was to{" "}
          <Link
            href="https://www.altitude-sports.com/"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Altitude-Sports
          </Link>{" "}
          with{" "}
          <Text as="span" variant="highlight">
            Next.js
          </Text>
          . I also had the chance to teach ReactJS at EducaciónIT, which I
          really enjoyed because I love sharing what I learn.
        </Text>
        <Text fontSize="lg" color="gray.800">
          Even though I&apos;m currently more focused on frontend, I also have
          backend experience using technologies like Java, Rails, and Django.
          I&apos;m especially interested in{" "}
          <Text as="span" variant="highlight">
            building smooth user experiences
          </Text>
          , and from time to time I like digging into web app vulnerabilities
          and learning more about security.
        </Text>
        <Text fontSize="lg" color="gray.800">
          Outside of work, I enjoy reading, spending time outdoors, and having
          mate with my family. One of my favorite side projects is{" "}
          <Link
            href="https://tikijuegos.netlify.app/"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Tikijuegos
          </Link>
          , a game I built for my son using React and drag & drop. You can check
          that out (and more) on my GitHub, or learn more about my experience on
          LinkedIn.
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Tech Stack
        </Text>
        <Flex gap={4} overflow={"hidden"} flexWrap={"wrap"}>
          {techStack.map((tech) => (
            <Badge key={tech} variant="solid" colorScheme="teal">
              {tech}
            </Badge>
          ))}
        </Flex>
      </Stack>
    </Flex>
  )
}

export default AboutMe
