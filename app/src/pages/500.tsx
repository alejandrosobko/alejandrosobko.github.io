import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react"
import { HouseIcon, WarningIcon } from "@phosphor-icons/react"

const ErrorPage = () => {
  return (
    <Container maxW="container.md" textAlign="center" py={8}>
      <Box mb={8}>
        <Box
          w="80px"
          h="80px"
          borderRadius="full"
          bg="#fee2e2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
        >
          <WarningIcon size={48} fill="#dc2626" />
        </Box>
      </Box>

      <Heading as="h1" size="2xl" mb={4}>
        Algo salió mal
      </Heading>

      <Text fontSize="lg" color="gray.600" mb={6}>
        Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido
        notificado.
      </Text>

      <Text fontSize="md" color="gray.600" mb={4}>
        Puedes intentar recargar la página o volver a la página de inicio.
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
        <Link
          href="/help"
          fontWeight="semibold"
          display="flex"
          alignItems="center"
          gap={1}
        >
          Contactar soporte <Text fontWeight="bold">&gt;</Text>
        </Link>
      </Flex>
      <Link
        href="mailto:soporte@syncrofitness.com"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        soporte@syncrofitness.com
      </Link>
    </Container>
  )
}

export default ErrorPage
