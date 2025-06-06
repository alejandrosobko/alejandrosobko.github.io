import { Flex, Heading } from "@chakra-ui/react"
import BlogCard from "./BlogCard"

const Blog = () => {
  return (
    <Flex
      id="projects"
      minH={"60dvh"}
      bgColor={"#f1f5f9"}
      direction={"column"}
      gap={4}
      py={12}
      px={8}
      pt={"50px"}
    >
      <Heading variant={"primary"}>Blog Posts</Heading>

      <Flex
        gap={12}
        margin={"auto"}
        mt={8}
        direction={{ base: "column", md: "row" }}
      >
        <BlogCard
          title="Beautiful drag and drop with React - The beginner’s guide"
          description="Understand this library by creating a kids video game"
          link="https://blog.devartis.com/beautiful-drag-and-drop-with-react-the-beginners-guide-7798e3928290"
        />

        <BlogCard
          title="Learn programming: Reasons and resources"
          description="Learn how to have superpowers!"
          link="https://blog.devartis.com/learn-programming-reasons-and-resources-70bbd88f31b8"
        />
      </Flex>
    </Flex>
  )
}

export default Blog
