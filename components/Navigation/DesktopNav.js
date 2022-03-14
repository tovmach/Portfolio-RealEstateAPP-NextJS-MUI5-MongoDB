import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MobileNav from './MobileNav'
import Link from '../Link'

const DesktopNav = () => {
  return (
    <Box sx={{ mb: { xs: 1, sm: 3 } }}>
      <AppBar
        position='static'
        sx={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <IconButton component={Link} href={'/'}>
              RealEstate
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', md: 'inline-flex', fontSize: 18 },
                ml: 'auto',
              }}
            >
              <Button
                color='primary'
                sx={{ fontSize: 18 }}
                component={Link}
                href={'/properties'}
              >
                Discover
              </Button>

              <Button
                color='primary'
                sx={{ fontSize: 18 }}
                component={Link}
                href={'/favorites'}
              >
                Favorites
              </Button>

              <Button
                color='primary'
                sx={{ fontSize: 18 }}
                component={Link}
                href={'/contactus'}
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
