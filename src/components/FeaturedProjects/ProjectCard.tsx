import { Badge, Flex, Stack, Text } from "@chakra-ui/react"

const ProjectCard = ({
  title,
  description,
  stack,
}: {
  title: string
  description: string
  stack: string[]
}) => {
  return (
    <Stack
      bgColor={"white"}
      borderRadius={"lg"}
      p={8}
      gap={4}
      maxW={"350px"}
      shadow={"md"}
    >
      <Text fontSize="xl" color="gray.800" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
      <Flex gap={4} flexWrap={"wrap"}>
        {stack.map((tech) => (
          <Badge key={tech} variant="solid" colorScheme="teal">
            {tech}
          </Badge>
        ))}
      </Flex>
    </Stack>
  )
}

export default ProjectCard
