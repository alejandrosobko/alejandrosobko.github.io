import { ComponentStyleConfig } from "@chakra-ui/react"

export const buttonTheme: ComponentStyleConfig = {
  variants: {
    primary: {
      bgGradient: "linear(to-r, rgb(5, 6, 6), rgb(60, 65, 64))",
      color: "white",
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
      _hover: {
        opacity: 0.7,
      },
    },
    secondary: {
      bgColor: "white",
      borderWidth: "1px",
      borderColor: " rgb(5, 6, 6)",
      color: " rgb(60, 65, 64)",
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
      _hover: {
        bgColor: "rgb(245, 245, 245)",
      },
    },
  },
}
