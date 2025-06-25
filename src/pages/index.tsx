import AboutMe from "@/components/AboutMe"
import Blog from "@/components/Blog"
import CTA from "@/components/CTA"
import FeaturedProjects from "@/components/FeaturedProjects"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/services"
import { Box } from "@chakra-ui/react"

const Index = () => {
  return (
    <Box scrollBehavior={"smooth"}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <FeaturedProjects />
      <Blog />
      <CTA />
      <Footer />
    </Box>
  )
}
export default Index
