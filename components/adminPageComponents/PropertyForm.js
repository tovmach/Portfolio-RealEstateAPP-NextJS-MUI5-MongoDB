import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { TextField, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import { amber } from '@mui/material/colors'
import SendIcon from '@mui/icons-material/Send'
import {
  typeList,
  operationList,
  locationList,
} from '../../utils/selectMenuDataArrays'

const PropertyForm = ({
  operation,
  setOperation,
  type,
  setType,
  price,
  setPrice,
  city,
  setCity,
  livingArea,
  setLivingArea,
  plot,
  setPlot,
  bedroom,
  setBedroom,
  bathroom,
  setBathroom,
  description,
  setDescription,
  onSubmitHandler,
  img,
  setImg,
}) => {
  return (
    <>
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
            <Box sx={{ minWidth: 240 }}>
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select
                  value={city}
                  label='City'
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                >
                  {locationList.map((item) => (
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
              label='Image Link'
              variant='outlined'
              value={img}
              onChange={(e) => {
                setImg(e.target.value)
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
              disabled={
                operation.length === 0 ||
                type.length === 0 ||
                price.length === 0 ||
                city.length === 0 ||
                livingArea.length === 0 ||
                plot.length === 0 ||
                bedroom.length === 0 ||
                bathroom.length === 0 ||
                description.length === 0 ||
                img.length === 0
              }
              fullWidth
              variant='contained'
              onClick={onSubmitHandler}
              sx={{
                bgcolor: amber[700],
                '&:hover': {
                  bgcolor: amber[600],
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

export default PropertyForm
