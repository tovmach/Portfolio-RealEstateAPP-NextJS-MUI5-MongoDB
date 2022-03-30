import React from 'react'
import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Typography, Container } from '@mui/material'

const PropertyDescription = () => {
  return (
    <Container maxWidth='lg'>
      <Typography sx={{ color: blueGrey[900] }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        eveniet perspiciatis dignissimos sunt? Odio, officia quod, voluptatum
        at, sunt itaque neque repellat reiciendis inventore dolores aperiam
        harum quibusdam accusamus aut. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti eveniet perspiciatis dignissimos sunt? Odio,
        officia quod, voluptatum at, sunt itaque neque repellat reiciendis
        inventore dolores aperiam harum quibusdam accusamus aut.
      </Typography>
    </Container>
  )
}

export default PropertyDescription
