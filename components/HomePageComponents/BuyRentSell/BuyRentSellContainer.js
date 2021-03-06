import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import BuyRentSellCardList from './BuyRentSellCardList'

const BuyRentSellContainer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        my: 2,
        py: 5,
        backgroundImage: "url('/webMedia/topography.svg')",
      }}
    >
      <Grid container spacing={0} justifyContent={'center'}>
        <Grid item xs={12} sm={8} lg={6}>
          <Box
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              textAlign: 'center',
              mb: 2,
            }}
          >
            Whether you’re buying, selling or renting we can help you move
            forward.
          </Box>
        </Grid>
      </Grid>
      <BuyRentSellCardList />
    </Box>
  )
}

export default BuyRentSellContainer
