import React from 'react'
import { Typography, Grid } from '@mui/material'
import LikeButton from '../likeButton/LikeButton'
import useMediaQuery from '@mui/material/useMediaQuery'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const TitleAndLikeButton = ({ type, city, operation, id }) => {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item mt={{ xs: 1, md: 1 }}>
          <Typography
            component={'h1'}
            sx={{
              fontSize: { xs: '1.45rem', sm: '2rem', md: '2.5rem' },
              color: 'primary.main',
              fontWeight: { xs: 'bold', sm: 'regular' },
            }}
          >
            {capitalizeFirstLetter(type)} for{' '}
            {operation === 'buy' ? 'Sale' : 'Rent'} in{' '}
            {capitalizeFirstLetter(city)}
          </Typography>
        </Grid>
        <Grid item mt={{ xs: 1, md: 1 }}>
          <LikeButton id={id} size={matches ? 'large' : ''} />
        </Grid>
      </Grid>
    </>
  )
}

export default TitleAndLikeButton
