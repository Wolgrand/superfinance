import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors:{
    gray: {
      "900":"#181b23",
      "800":"#1f2029",
      "700":"#353646",
      "600":"#4b4d63",
      "500":"#616480",
      "400":"#797d9a",
      "300":"#9699b0",
      "200":"#DFE2EB",
      "150":"#d1d2dc",
      "100":"#F2F5FA",
      "50":"#EEEEF2",
      "25":"#FDFFFE",
      

    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles:{
    global:{
      body:{
        bg: 'gray.150',
        color:'gray.900'
      }
    }
  }
})
