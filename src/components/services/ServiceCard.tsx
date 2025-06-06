import { Flex, IconButton, Stack, Text } from "@chakra-ui/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { JSX } from "react"

const ServiceCard = ({
  title,
  description,
  icon,
  items,
}: {
  title: string
  description: string
  icon: JSX.Element
  items: string[]
}) => {
  return (
    <Stack
      bgColor={"white"}
      borderRadius={"lg"}
      p={4}
      gap={4}
      maxW={"350px"}
      shadow={"md"}
    >
      <IconButton
        w={8}
        rounded={"full"}
        aria-label="Code"
        colorScheme="gray"
        icon={icon}
      />
      <Text fontSize="xl" color="gray.800" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
      <Stack gap={4}>
        {items.map((item, index) => (
          <Flex key={index} alignItems={"start"} gap={2}>
            <ArrowRightIcon size={16} weight="bold" />
            <Text fontSize="sm" color="gray.600">
              {item}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  )
}

export default ServiceCard
