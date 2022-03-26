import React from 'react'
import Container from '@mui/material/Container'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { CircularProgress, Grid } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNotification } from './notification/NotificationBarContext'
import { useContactData } from './contactButton/ContactButtonContext'
import { useEffect } from 'react'

const ContactForm = () => {
  const ctxContactData = useContactData()
  const ctxNotification = useNotification()

  const [name, setName] = useState('')
  const [nameHelper, setNameHelper] = useState('')
  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')
  const [message, setMessage] = useState('')
  const [messageHelper, setMessageHelper] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [loading, setLoading] = useState(false)

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

  const sendFormHandler = () => {
    ctxNotification.showNotification('Sending Email', 'info')
    setLoading(true)
    axios
      .post('/api/contact', { name, email, phone, message })
      .then((res) => {
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
        setLoading(false)
        ctxNotification.showNotification('Thanks for reaching out!', 'success')
        ctxContactData.addContactData(name, email, phone)
      })
      .catch((err) => {
        setLoading(false)
        ctxNotification.showNotification(err.message, 'error')
      })
  }

  useEffect(() => {
    const contactData = ctxContactData.contactData

    if (Object.keys(contactData).length > 0) {
      setName(contactData.name)
      setPhone(contactData.phone)
      setEmail(contactData.email)
    }
  }, [ctxContactData.contactData])

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={1.5} mb={3}>
        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            autoComplete='off'
            id='name'
            label='Full Name'
            variant='outlined'
            onChange={onChangeHandler}
            error={nameHelper.length !== 0}
            helperText={nameHelper}
            value={name}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            fullWidth
            autoComplete='off'
            id='phone'
            label='Phone'
            variant='outlined'
            onChange={onChangeHandler}
            helperText={phoneHelper}
            error={phoneHelper.length !== 0}
            value={phone}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            required
            fullWidth
            autoComplete='off'
            id='email'
            label='Email'
            type='email'
            variant='outlined'
            onChange={onChangeHandler}
            error={emailHelper.length !== 0}
            helperText={emailHelper}
            value={email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
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
            value={message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ width: '100%' }}
            variant='outlined'
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
            {loading ? (
              <CircularProgress size={20} sx={{ color: 'secondary.main' }} />
            ) : (
              'Submit'
            )}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactForm
