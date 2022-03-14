import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import Footer from './Footer'
import DesktopNav from './Navigation/DesktopNav'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <DesktopNav />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
