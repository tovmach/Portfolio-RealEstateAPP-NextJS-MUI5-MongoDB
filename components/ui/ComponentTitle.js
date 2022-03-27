import React from 'react'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const ComponentTitle = ({ h2, h3 }) => {
  return (
    <>
      <Typography
        variant='h2'
        color='secondary'
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        {h2}
      </Typography>
      <Typography
        variant='h3'
        color='primary'
        sx={{
          fontSize: {
            xs: '2rem',
            md: '2.75rem',
          },
          position: 'relative',
          top: { xs: -7, sm: -10 },
        }}
      >
        {h3}
      </Typography>
    </>
  )
}

export default ComponentTitle
