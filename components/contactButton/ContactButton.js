import React from 'react'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send'
import ContactButtonDialog from './ContactButtonDialog'
import { useContactData } from './ContactButtonContext'
import { useContactedPropertiesList } from './ContactPropertyListContext'

const ContactButton = ({ id, price, type, city, province }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [contactButtonActiv, setContactButtonActiv] = useState(false)

  const ctxContactData = useContactData()
  const ctxContactedPropertiesList = useContactedPropertiesList()

  const dialogCloseHandler = () => {
    setOpenDialog(false)
  }

  useEffect(() => {
    if (ctxContactedPropertiesList.contactPropertiesList.includes(id)) {
      setContactButtonActiv(true)
    }
    // } else {
    //   setContactButtonActiv(false)
    // }
  }, [ctxContactedPropertiesList.contactPropertiesList, id])

  const propertyContactHandler = () => {
    setOpenDialog(true)
    // ctxContactData.getContactData()
  }

  return (
    <>
      <IconButton aria-label='Send message' onClick={propertyContactHandler}>
        <SendIcon sx={{ color: contactButtonActiv && '#7AA7FC' }} />
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
