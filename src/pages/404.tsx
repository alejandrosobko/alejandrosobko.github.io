import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react"
import { HouseIcon, LightningIcon } from "@phosphor-icons/react"

const NotFoundPage = () => {
  return (
    <Container maxW="container.md" textAlign="center" py={8}>
      <Box mb={8}>
        <Box
          w="80px"
          h="80px"
          borderRadius="full"
          bg="#ccfbf1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
        >
          <LightningIcon size={48} fill="#0d9488" />
        </Box>
      </Box>

      <Heading as="h1" size="2xl" mb={4}>
        Página no encontrada
      </Heading>

      <Text fontSize="lg" color="gray.600" mb={6}>
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </Text>

      <Text fontSize="md" color="gray.600" mb={4}>
        O intenta navegar a estas secciones populares:
      </Text>

      <Flex justify="center" gap={4}>
        <Button
          as={Link}
          variant={"outline"}
          href="/"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <HouseIcon size={20} />
          <Text>Inicio</Text>
        </Button>
      </Flex>

      <Flex
        mt={8}
        justify="space-between"
        align="center"
        fontSize="sm"
        color="gray.500"
      >
        <Text>
          © {new Date().getFullYear()} Alejandro Sobko. Todos los derechos
          reservados.
        </Text>
      </Flex>
    </Container>
  )
}

export default NotFoundPage
