import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme'
import { CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import Footer from './Footer'
import DesktopNav from './Navigation/DesktopNav'
import NotificationBarContextProvider from './notification/NotificationBarContext'
import ContactDataContextProvider from './contactButton/ContactButtonContext'
import ContactPropertyListContext from './contactButton/ContactPropertyListContext'
import FavoritesPropertyListContext from './likeButton/FavoritesPropertiesListContext'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>RealEstate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FavoritesPropertyListContext>
          <ContactPropertyListContext>
            <ContactDataContextProvider>
              <NotificationBarContextProvider>
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
              </NotificationBarContextProvider>
            </ContactDataContextProvider>
          </ContactPropertyListContext>
        </FavoritesPropertyListContext>
      </ThemeProvider>
    </>
  )
}

export default Layout
