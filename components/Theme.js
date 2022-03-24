import { createTheme } from '@mui/material'

export default createTheme({
  // components: {
  //   MuiSelect: {
  //     // variants: [
  //     //   {
  //     //     props: { variant: 'white' },
  //     //     style: {},
  //     //   },
  //     // ],
  //     styleOverrides: {
  //       icon: {
  //         color: 'white',
  //       },
  //       outlined: {
  //         color: 'white',
  //       },
  //       notchedOutline: {
  //         borderColor: 'red',
  //       },
  //     },
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      xmd: 780,
      md: 900,
      xlg: 1129.4,
      lg: 1200,
      xl: 1536,
    },
  },
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
