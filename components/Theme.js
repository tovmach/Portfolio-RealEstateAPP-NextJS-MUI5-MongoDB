import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    typography: {
      fontFamily: ['Poppins', 'Open Sans'].join(','),
    },
    primary: {
      main: '#1A626D',
    },
    secondary: {
      main: '#2DA7BA',
    },
    background: {
      default: '#EBF1F5',
    },
  },
})
