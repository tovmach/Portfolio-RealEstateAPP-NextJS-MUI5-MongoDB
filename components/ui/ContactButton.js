import React from 'react'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send'
import ContactButtonDialog from './ContactButtonDialog'

const ContactButton = ({ id, price, type, city, province }) => {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [propertyContact, setPropertyContact] = useState(false)

  const dialogCloseHandler = () => {
    setOpenDialog(false)
  }

  useEffect(() => {}, [])

  const propertyContactHandler = () => {
    setPropertyContact((prev) => !prev)
    setOpenDialog(true)
  }

  return (
    <>
      <IconButton aria-label='Send message' onClick={propertyContactHandler}>
        <SendIcon sx={{ color: propertyContact && 'blue' }} />
      </IconButton>{' '}
      <ContactButtonDialog
        openDialog={openDialog}
        dialogCloseHandler={dialogCloseHandler}
        id={id}
        price={price}
        type={type}
        city={city}
        province={province}
      />
    </>
  )
}

export default ContactButton

// const [favorites, setFavorites] = useState(false)

// useEffect(() => {
//   const favoritesLocalData = JSON.parse(localStorage.getItem('favorites'))
//   if (favoritesLocalData === null) {
//     localStorage.setItem('favorites', JSON.stringify([]))
//   }
//   if (favoritesLocalData.includes(id)) {
//     setFavorites(true)
//   }
// }, [])

// const favoritesHandler = () => {
//   const favoritesLocalData = JSON.parse(localStorage.getItem('favorites'))

//   setFavorites((prev) => {
//     if (prev === false) {
//       setFavorites(true)
//       localStorage.setItem(
//         'favorites',
//         JSON.stringify([id, ...favoritesLocalData])
//       )
//     } else {
//       setFavorites(false)
//       const newFavoritesList = favoritesLocalData.filter(
//         (favoriteId) => favoriteId !== id
//       )
//       localStorage.setItem('favorites', JSON.stringify(newFavoritesList))
//     }
//   })
// }
