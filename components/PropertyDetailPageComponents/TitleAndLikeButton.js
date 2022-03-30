import React from 'react'
import { Typography, Grid } from '@mui/material'
import LikeButton from '../likeButton/LikeButton'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const TitleAndLikeButton = ({ type, city, operation, id }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: '2.5rem',
              color: 'primary.main',
            }}
          >
            {capitalizeFirstLetter(type)} in {capitalizeFirstLetter(city)} for{' '}
            {operation === 'buy' ? 'Sale' : 'Rent'}
          </Typography>
        </Grid>
        <Grid item>
          {' '}
          <LikeButton id={id} size={'large'} />
        </Grid>
      </Grid>
    </>
  )
}

export default TitleAndLikeButton
