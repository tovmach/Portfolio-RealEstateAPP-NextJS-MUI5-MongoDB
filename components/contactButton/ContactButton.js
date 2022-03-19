import React from 'react'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send'
import ContactButtonDialog from './ContactButtonDialog'
import { useContactedPropertiesList } from './ContactPropertyListContext'

const ContactButton = ({ id, price, type, city, province }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [contactButtonActiv, setContactButtonActiv] = useState(false)

  const ctxContactedPropertiesList = useContactedPropertiesList()

  const dialogCloseHandler = () => {
    setOpenDialog(false)
  }

  useEffect(() => {
    if (ctxContactedPropertiesList.contactPropertiesList.includes(id)) {
      setContactButtonActiv(true)
    }
  }, [ctxContactedPropertiesList.contactPropertiesList, id])

  return (
    <>
      <IconButton aria-label='Send message' onClick={() => setOpenDialog(true)}>
        <SendIcon sx={{ color: contactButtonActiv && '#7AA7FC' }} />
      </IconButton>
      <ContactButtonDialog
        openDialog={openDialog}
        dialogCloseHandler={dialogCloseHandler}
        id={id}
        price={price}
        type={type}
        city={city}
        province={province}
        contactButtonActiv={contactButtonActiv}
        setContactButtonActiv={setContactButtonActiv}
      />
    </>
  )
}

export default ContactButton
