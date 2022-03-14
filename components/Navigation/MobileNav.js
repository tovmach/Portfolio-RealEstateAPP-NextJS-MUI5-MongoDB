import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '../Link'

const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={{
          zIndex: 1402,
          '& .MuiButtonBase-root.Mui-selected': {
            backgroundColor: 'rgba(0,0,0,0.2)',

            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
          },
        }}
        PaperProps={{ sx: { bgcolor: '#EBF1F5' } }}
      >
        <List
          disablePadding
          sx={{
            '& .MuiListItem-root': { borderBottom: '1px solid #9494942e' },
          }}
        >
          <ListItem>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false)
              }}
              component={Link}
              href={'/properties'}
            >
              <ListItemText>Discover</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false)
              }}
              component={Link}
              href={'/favorites'}
            >
              <ListItemText>Favorites</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              component={Link}
              href={'/contactus'}
            >
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        onClick={() => setOpenDrawer((prevOpenDrawer) => !prevOpenDrawer)}
        edge='start'
        color='secondary'
        aria-label='menu'
        sx={{ ml: 'auto', display: { md: 'none' } }}
      >
        <Menu sx={{ fontSize: 40 }} />
      </IconButton>
    </>
  )
}

export default MobileNav
