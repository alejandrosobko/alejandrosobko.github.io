import { ComponentStyleConfig } from "@chakra-ui/react"

export const headingTheme: ComponentStyleConfig = {
  variants: {
    primary: {
      fontSize: "2.3rem",
      textAlign: "center",
      background:
        "linear-gradient(90deg,rgb(4, 30, 49),rgb(23, 44, 146),rgb(18, 56, 195))",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
}
