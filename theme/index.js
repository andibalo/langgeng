import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
      primary: {
        100: "rgba(253,107,17, 0.15)",
        200: "#FD6B11",
      },
      secondary: {
        100: "#212F3B"
      }
    },
    fonts: {
        heading: 'Nunito',
        body: 'Inter',
    },
  })