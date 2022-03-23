import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
import { IconButton } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '../Link'
import DiscoverIcon from '../svg/Nav/DiscoverIcon'
import TelegramIcon from '@mui/icons-material/Telegram'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ListItemIcon } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useEffect } from 'react'
import { Badge } from '@mui/material'
import { useFavoritesPropertiesList } from '../likeButton/FavoritesPropertiesListContext'
import { useContactedPropertiesList } from '../contactButton/ContactPropertyListContext'

const MobileNav = () => {
  const ctxFavoritesPropertiesList = useFavoritesPropertiesList()
  const ctxContactedPropertiesList = useContactedPropertiesList()

  const [openDrawer, setOpenDrawer] = useState(false)

  const [homeTab, setHomeTab] = useState(false)
  const [propertiesTab, setPropertiesTab] = useState(false)
  const [favoritesTab, setFavoritesTab] = useState(false)
  const [contactusTab, setContactusTab] = useState(false)

  useEffect(() => {
    setHomeTab(window.location.pathname.split('/')[1] === '')
    setPropertiesTab(window.location.pathname.split('/')[1] === 'properties')
    setFavoritesTab(window.location.pathname.split('/')[1] === 'favorites')
    setContactusTab(window.location.pathname.split('/')[1] === 'contactus')
  })

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
          <ListItem sx={{ bgcolor: homeTab && '#D9E5EC' }}>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false)
              }}
              component={Link}
              href={'/'}
            >
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <HomeIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText sx={{ color: 'primary.main' }}>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ bgcolor: propertiesTab && '#D9E5EC' }}>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false)
              }}
              component={Link}
              href={'/properties'}
            >
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <DiscoverIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'primary.main' }}>
                Discover
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ bgcolor: favoritesTab && '#D9E5EC' }}>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false)
              }}
              component={Link}
              href={'/favorites'}
            >
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <FavoriteBorderIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: '#FF6584',
                    color: 'white',
                    top: -2,
                    right: 75,
                  },
                  color: 'primary.main',
                }}
              >
                <Badge
                  badgeContent={ctxFavoritesPropertiesList.favorites.length}
                  max={99}
                >
                  Favorites
                </Badge>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ bgcolor: contactusTab && '#D9E5EC' }}>
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              component={Link}
              href={'/contactus'}
            >
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <TelegramIcon sx={{ color: 'secondary.main' }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: '#7AA7FC',
                    color: 'white',
                    top: -2,
                    right: 64,
                  },
                  color: 'primary.main',
                }}
              >
                <Badge
                  badgeContent={
                    ctxContactedPropertiesList.contactPropertiesList.length
                  }
                  max={99}
                >
                  Contact
                </Badge>
              </ListItemText>
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
