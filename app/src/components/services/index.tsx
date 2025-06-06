import { Flex, Heading } from "@chakra-ui/react"
import { ChartLineUpIcon, CodeIcon } from "@phosphor-icons/react"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <Flex
      id="services"
      minH={"60dvh"}
      bgColor={"#f6f8fb"}
      direction={"column"}
      gap={4}
      py={12}
      px={8}
      pt={"50px"}
    >
      <Heading variant={"primary"}>My Services</Heading>

      <Flex
        gap={12}
        margin={"auto"}
        mt={8}
        direction={{ base: "column", md: "row" }}
      >
        <ServiceCard
          title="Full-stack development"
          description="End-to-end development of web applications with modern technologies, ensuring seamless user experiences and robust backend systems."
          icon={<CodeIcon size={24} />}
          items={[
            "Full-stack web application development",
            "API development and integration",
            "E-commerce solutions",
            "Content management systems",
          ]}
        />

        <ServiceCard
          title="Technical Consulting"
          description=" Strategic guidance on technology choices, architecture decisions,
            and implementation approaches tailored to your business goals."
          icon={<ChartLineUpIcon size={24} />}
          items={[
            "Technology stack assessment and recommendations",
            "Code reviews and quality assessment",
            "Performance optimization",
            "Technical team mentoring",
          ]}
        />
      </Flex>
    </Flex>
  )
}

export default Services
