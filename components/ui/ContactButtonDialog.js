import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect } from 'react'
import { useState } from 'react'
import Slide from '@mui/material/Slide'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const ContactButtonDialog = ({ openDialog, dialogCloseHandler }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [name, setName] = useState('')
  const [nameHelper, setNameHelper] = useState('')
  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')
  const [message, setMessage] = useState('')
  const [messageHelper, setMessageHelper] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const onChangeHandler = (event) => {
    let valid

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        )

        if (!valid) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }
        break
      case 'name':
        setName(event.target.value)
        if (name.length < 2) {
          setNameHelper('Enter real name')
        } else {
          setNameHelper('')
        }
        break
      case 'message':
        setMessage(event.target.value)
        if (message.length < 4) {
          setMessageHelper('Message too short')
        } else {
          setMessageHelper('')
        }
        break
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(
          event.target.value
        )

        if (!valid) {
          setPhoneHelper('Invalid phone')
        } else {
          setPhoneHelper('')
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    const contactData = JSON.parse(localStorage.getItem('contactData'))

    if (contactData === null) {
      localStorage.setItem('contactData', JSON.stringify([]))
    }
  }, [])

  const sendFormHandler = () => {
    // dialogCloseHandler()
    // const contactData = JSON.parse(localStorage.getItem('contactData'))
    // if(contactData.length === 0){
    // }
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        open={openDialog}
        onClose={dialogCloseHandler}
      >
        <DialogTitle>Are you interested in this property?</DialogTitle>
        <DialogContent sx={{ '& .MuiFormControl-root ': { mt: 2 } }}>
          <DialogContentText>
            Fill out the contact form and our team will contact you as soon as
            possible.
          </DialogContentText>
          <TextField
            fullWidth
            autoComplete='off'
            id='name'
            label='Full Name'
            variant='outlined'
            onChange={onChangeHandler}
            error={nameHelper.length !== 0}
            helperText={nameHelper}
          />
          <TextField
            fullWidth
            autoComplete='off'
            id='phone'
            label='Phone'
            variant='outlined'
            onChange={onChangeHandler}
            helperText={phoneHelper}
            error={phoneHelper.length !== 0}
          />
          <TextField
            fullWidth
            autoComplete='off'
            id='email'
            label='Email'
            type='email'
            variant='outlined'
            onChange={onChangeHandler}
            error={emailHelper.length !== 0}
            helperText={emailHelper}
          />
          <TextField
            fullWidth
            autoComplete='off'
            id='message'
            label='Message'
            variant='outlined'
            onChange={onChangeHandler}
            multiline
            rows={6}
            error={messageHelper.length !== 0}
            helperText={messageHelper}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogCloseHandler}>Cancel</Button>
          <Button
            onClick={sendFormHandler}
            disabled={
              name.length === 0 ||
              nameHelper.length !== 0 ||
              message.length === 0 ||
              messageHelper.length !== 0 ||
              emailHelper.length !== 0 ||
              email.length === 0 ||
              phone.length === 0 ||
              phoneHelper.length !== 0
            }
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ContactButtonDialog
