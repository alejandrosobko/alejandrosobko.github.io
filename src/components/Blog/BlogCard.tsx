import { Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

const BlogCard = ({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
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
      <Link href={link} target="_blank">
        Read more
      </Link>
    </Stack>
  )
}

export default BlogCard
