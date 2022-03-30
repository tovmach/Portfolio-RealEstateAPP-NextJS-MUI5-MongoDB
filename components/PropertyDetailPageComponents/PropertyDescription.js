import React from 'react'
import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Typography, Container } from '@mui/material'
import numbersToWords from '../../utils/numbersToWords'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'

const PropertyDescription = ({ item }) => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const amazingSynonyms = ['amazing', 'stunning', 'awesome']

  return (
    <Container maxWidth='lg'>
      <Typography sx={{ color: blueGrey[900] }}>
        This {amazingSynonyms[randomNumber(0, amazingSynonyms.length)]}{' '}
        {item.type} at the price of {numbersToWords(item.price)} euros is
        located in {capitalizeFirstLetter(item.city)} whit a living area of{' '}
        {numbersToWords(item.livingArea)} square meters{' '}
        {item.plot && `and ${numbersToWords(item.plot)} of plot`} it has a total
        of {numbersToWords(item.bedroom)}{' '}
        {item.bedroom > 1 ? 'bedrooms' : 'bedroom'} and{' '}
        {numbersToWords(item.bathroom)}{' '}
        {item.bedroom > 1 ? 'bathrooms' : 'bathroom'}.
        {item.description && item.description}
      </Typography>
    </Container>
  )
}

export default PropertyDescription
