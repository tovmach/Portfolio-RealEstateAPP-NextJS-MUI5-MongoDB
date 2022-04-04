import React from 'react'
import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Typography, Container } from '@mui/material'
import numbersToWords from '../../utils/numbersToWords'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'

const PropertyDescription = ({ item }) => {
  return (
    <Container maxWidth='lg'>
      <Typography sx={{ color: blueGrey[900] }}>{item.description}</Typography>
    </Container>
  )
}

export default PropertyDescription
