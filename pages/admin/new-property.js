import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { TextField, Button } from '@mui/material'

const NewProperty = () => {
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')

  const onSubmitHandler = () => {
    axios.post('/api/add-property', {
      type,
      price,
      city,
      province,
      livingArea,
      bedroom,
      bathroom,
      img: '/villa.jpg',
    })
  }

  return (
    <>
      <Typography variant='h3' color='primary' textAlign={'center'}>
        Add new Property
      </Typography>
      <Container maxWidth='sm'>
        <Grid
          container
          spacing={2}
          mt={2}
          direction={'column'}
          alignItems={'center'}
        >
          <Grid item>
            <TextField
              label='Type'
              variant='outlined'
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Price'
              variant='outlined'
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Province'
              variant='outlined'
              value={province}
              onChange={(e) => {
                setProvince(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='City'
              variant='outlined'
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Living Area'
              variant='outlined'
              value={livingArea}
              onChange={(e) => {
                setLivingArea(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Bedroom'
              variant='outlined'
              value={bedroom}
              onChange={(e) => {
                setBedroom(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Bathroom'
              variant='outlined'
              value={bathroom}
              onChange={(e) => {
                setBathroom(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default NewProperty
