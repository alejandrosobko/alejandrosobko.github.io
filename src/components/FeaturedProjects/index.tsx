import { Button, Flex, Heading } from "@chakra-ui/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import Link from "next/link"
import ProjectCard from "./ProjectCard"

const FeaturedProjects = () => {
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
      scrollMarginTop="40px"
    >
      <Heading variant={"primary"}>Featured Projects</Heading>

      <Flex
        gap={12}
        margin={"auto"}
        mt={8}
        direction={{ base: "column", md: "row" }}
      >
        <ProjectCard
          title="Altitude-Sports"
          description="I directly collaborated to build a new e-commerce storefront from scratch using Next.js. My role involved designing and developing pixel-perfect, high-performance interfaces, collaborating closely with design, marketing, and backend teams to ensure a smooth rollout and strong user experience. Throughout the project, I've worked on integrating key services like Algolia, Commercetools, and Contentful to create a seamless, dynamic shopping experience."
          stack={[
            "Next.js",
            "Commercetools",
            "Contentful",
            "Algolia",
            "Performance",
          ]}
        />

        <ProjectCard
          title="Decentralike"
          description="I led the end-to-end development of Decentralike, a crypto news and data portal built with Next.js. I was solely responsible for the entire project—from initial architecture and CMS setup to production deployment. The app integrates multiple crypto price APIs and renders interactive charts to visualize market data in real time. I also configured and connected a headless CMS to manage editorial content efficiently. My work focused on performance, SEO, and delivering a seamless user experience across the platform."
          stack={[
            "Next.JS",
            "TypeScript",
            "CMS (Headless)",
            "APIS",
            "Performance",
          ]}
        />

        <ProjectCard
          title="HealthyWage"
          description="I led the frontend migration to Vue.js, building pixel-perfect UIs directly from AdobeXD designs. My work focused on high-impact areas like landing pages, funnels, and checkout flows—key pieces to improve the overall user experience and boost conversion rates. I collaborated closely with backend and design teams to ensure smooth integration and consistency across the platform."
          stack={["Vue.js", "Django"]}
        />
      </Flex>

      <Flex justifyContent={"center"}>
        <Button
          variant="secondary"
          mt={8}
          gap={4}
          as={Link}
          href="https://www.linkedin.com/in/alejandrosobko/"
          target="_blank"
        >
          View more on LinkedIn <ArrowRightIcon />
        </Button>
      </Flex>
    </Flex>
  )
}

export default FeaturedProjects
