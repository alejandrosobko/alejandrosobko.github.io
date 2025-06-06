"use client"

import theme from "@/theme/theme"
import { ChakraProvider } from "@chakra-ui/react"

export function CustomChakraProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
