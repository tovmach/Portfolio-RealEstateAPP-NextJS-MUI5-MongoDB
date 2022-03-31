import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { TextField, Button } from '@mui/material'
import SelectMenu from '../../components/ui/SelectMenu'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import { amber } from '@mui/material/colors'
import SendIcon from '@mui/icons-material/Send'

const NewProperty = () => {
  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [plot, setPlot] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [description, setDescription] = useState('')

  const operationList = [
    { text: 'Sell', value: 'buy' },
    { text: 'Rent', value: 'rent' },
  ]

  const typeList = [
    { text: 'Villa', value: 'villa' },
    { text: 'Apartment', value: 'apartment' },
    { text: 'Townhouse', value: 'townhouse' },
    { text: 'Commercial', value: 'commercial' },
    { text: 'Penthouse', value: 'penthouse' },
    { text: 'Plot', value: 'plot' },
  ]

  const onSubmitHandler = () => {
    axios
      .post('/api/add-property', {
        operation,
        type,
        price,
        city,
        livingArea,
        plot,
        bedroom,
        bathroom,
        description,
        img: '/villa.jpg',
      })
      .then((response) => {
        setOperation('')
        setType('')
        setPrice('')
        setCity('')
        setLivingArea('')
        setPlot('')
        setBedroom('')
        setBathroom('')
        setDescription('')
      })
  }

  return (
    <>
      <Typography
        component={'h1'}
        color='primary'
        textAlign={'center'}
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
        mb={1}
      >
        Add new Property
      </Typography>
      <Container maxWidth='sm'>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 240 }}>
              <FormControl fullWidth>
                <InputLabel>Operation</InputLabel>
                <Select
                  value={operation}
                  label='Operation'
                  onChange={(e) => {
                    setOperation(e.target.value)
                  }}
                >
                  {operationList.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ minWidth: 240 }}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={type}
                  label='Type'
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                >
                  {typeList.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Price €'
              variant='outlined'
              value={price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='City'
              variant='outlined'
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Living Area m2'
              variant='outlined'
              value={livingArea}
              onChange={(e) => {
                setLivingArea(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Plot m2'
              variant='outlined'
              value={plot}
              onChange={(e) => {
                setPlot(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Bedroom'
              variant='outlined'
              value={bedroom}
              onChange={(e) => {
                setBedroom(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Bathroom'
              variant='outlined'
              value={bathroom}
              onChange={(e) => {
                setBathroom(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoComplete='off'
              label='Description'
              variant='outlined'
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={6}
              value={description}
            />
          </Grid>
          <Grid item xs>
            <Button
              fullWidth
              variant='contained'
              onClick={onSubmitHandler}
              sx={{
                bgcolor: amber[600],
                '&:hover': {
                  bgcolor: amber[500],
                },
              }}
              endIcon={<SendIcon />}
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
