import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { buttonTheme } from "./components/button" // lo separamos para claridad, ver más abajo
import { headingTheme } from "./components/heading"
import { textTheme } from "./components/text"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  background: "rgb(255, 255, 255)",
  foreground: "rgb(5, 5, 20)",
  primary: "rgb(37, 99, 235)",
  primaryForeground: "rgb(242, 244, 255)",
  secondary: "rgb(230, 235, 245)",
  secondaryForeground: "rgb(40, 45, 50)",
  muted: "rgb(230, 235, 245)",
  mutedForeground: "rgb(110, 120, 140)",
  border: "rgb(200, 210, 220)",
  input: "rgb(200, 210, 220)",
}

const radius = "0.5rem"

const dark = {
  background: "rgb(5, 5, 20)",
  foreground: "rgb(242, 244, 255)",
  card: "rgb(5, 5, 20)",
  cardForeground: "rgb(242, 244, 255)",
  popover: "rgb(5, 5, 20)",
  popoverForeground: "rgb(242, 244, 255)",
  primary: "rgb(50, 112, 255)",
  primaryForeground: "rgb(40, 45, 50)",
  secondary: "rgb(30, 40, 50)",
  secondaryForeground: "rgb(242, 244, 255)",
  muted: "rgb(30, 40, 50)",
  mutedForeground: "rgb(150, 160, 180)",
  accent: "rgb(30, 40, 50)",
  accentForeground: "rgb(242, 244, 255)",
  destructive: "rgb(120, 20, 30)",
  destructiveForeground: "rgb(242, 244, 255)",
  border: "rgb(30, 40, 50)",
  input: "rgb(30, 40, 50)",
  ring: "rgb(60, 120, 255)",
}

const theme = extendTheme({
  config,
  colors,
  radius,
  dark,
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
    Text: textTheme,
  },
})

export default theme
