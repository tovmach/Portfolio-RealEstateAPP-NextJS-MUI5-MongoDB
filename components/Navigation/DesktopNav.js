import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MobileNav from './MobileNav'
import Link from '../Link'
import DiscoverIcon from '../svg/Nav/DiscoverIcon'
import TelegramIcon from '@mui/icons-material/Telegram'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Logo from '../svg/Nav/Logo'
import { useEffect } from 'react'
import { useState } from 'react'

const DesktopNav = () => {
  const [propertiesTab, setPropertiesTab] = useState(false)
  const [favoritesTab, setFavoritesTab] = useState(false)
  const [contactusTab, setContactusTab] = useState(false)

  useEffect(() => {
    setPropertiesTab(window.location.pathname.split('/')[1] === 'properties')
    setFavoritesTab(window.location.pathname.split('/')[1] === 'favorites')
    setContactusTab(window.location.pathname.split('/')[1] === 'contactus')
  })

  return (
    <Box sx={{ mb: { xs: 1, sm: 3 } }}>
      <AppBar
        position='static'
        sx={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            {/* <Button startIcon={<Logo sx={{ fontSize: 60 }} />}>
              RealEstate
            </Button> */}
            <Box
              component={Link}
              href={'/'}
              sx={{
                display: 'inline-block',
              }}
            >
              <Logo sx={{ fontSize: 55, position: 'relative', top: 5 }} />
              <Box
                sx={{
                  display: 'inline-block',
                  fontSize: 25,
                  color: 'primary.main',
                  position: 'relative',
                  top: -15,
                  fontFamily: 'Expletus Sans',
                  fontWeight: 'bold',
                }}
              >
                RealEstate
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'inline-flex', fontSize: 18 },
                ml: 'auto',
              }}
            >
              <Button
                color='primary'
                sx={{
                  fontSize: 18,
                  textTransform: 'none',
                  bgcolor: propertiesTab && '#D9E5EC',
                }}
                component={Link}
                href={'/properties'}
                startIcon={<DiscoverIcon />}
              >
                Discover
              </Button>

              <Button
                color='primary'
                sx={{
                  fontSize: 18,
                  textTransform: 'none',
                  bgcolor: favoritesTab && '#D9E5EC',
                }}
                component={Link}
                href={'/favorites'}
                startIcon={<FavoriteBorderIcon />}
              >
                Favorites
              </Button>

              <Button
                color='primary'
                sx={{
                  fontSize: 18,
                  textTransform: 'none',
                  bgcolor: contactusTab && '#D9E5EC',
                }}
                component={Link}
                href={'/contactus'}
                startIcon={<TelegramIcon />}
              >
                Contact
              </Button>
            </Box>

            <MobileNav />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default DesktopNav
