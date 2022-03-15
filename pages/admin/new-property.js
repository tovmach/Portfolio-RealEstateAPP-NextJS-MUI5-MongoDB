import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'

const NewProperty = () => {
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')

  return (
    <>
      <Typography variant='h3' color='primary' textAlign={'center'}>
        Add new Property
      </Typography>
      <Container maxWidth='sm'>
        <Grid container spacing={2} mt={2}>
          <Grid item>
            <TextField label='Price' variant='outlined' />
          </Grid>
          <Grid item>
            <TextField label='Price' variant='outlined' />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default NewProperty
