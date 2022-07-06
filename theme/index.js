import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
      primary: {
        100: "#0061f0",
        200: "#0061f0",
      },
      secondary: {
        100: "#0061f0"
      },
      light: {
        100: "#ffffff",
        200: "#ffffff",
      }
    },
    fonts: {
        heading: 'Nunito',
        body: 'Inter',
    },
  })