import React from 'react'
import ContactForm from '../ContactForm'
import { useState } from 'react'
import { useContactedPropertiesList } from '../contactButton/ContactPropertyListContext'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const PropertyContactForm = ({ item }) => {
  const [open, setOpen] = React.useState(false)
  const [contactButtonActiv, setContactButtonActiv] = useState(false)
  const ctxContactedPropertiesList = useContactedPropertiesList()

  useEffect(() => {
    if (ctxContactedPropertiesList.contactPropertiesList.includes(item._id)) {
      setContactButtonActiv(true)
    }
  }, [ctxContactedPropertiesList.contactPropertiesList, item._id])

  const handleContactButtonActiv = () => {
    setContactButtonActiv(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {contactButtonActiv ? (
        <Container maxWidth='lg'>
          <Button
            onClick={handleClickOpen}
            fullWidth
            variant='contained'
            sx={{
              bgcolor: '#7AA7FC',
              mb: 2,
              '&:hover': { bgcolor: '#6097ff' },
            }}
            endIcon={<SendIcon />}
          >
            we have your email
          </Button>
        </Container>
      ) : (
        <ContactForm
          data={item}
          setContactButtonActiv={setContactButtonActiv}
        />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'We have your email!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            We have successfully received your contact information. Do you want
            to send us a new email in relation to this property?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleContactButtonActiv()
              handleClose()
            }}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PropertyContactForm
