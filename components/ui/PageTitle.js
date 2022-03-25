import React from 'react'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const PageTitle = ({ h1, h2 }) => {
  return (
    <>
      {/* <Box
        sx={{
          width: { xs: 350, xmd: 740, lg: 1110 },

          mx: 'auto',
          px: { xs: 0, sm: '10px' },
        }}
      > */}
      <Container maxWidth='lg'>
        <Typography
          variant='h1'
          color='secondary'
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          {h1}
        </Typography>
        <Typography
          variant='h2'
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
          {h2}
        </Typography>
      </Container>

      {/* </Box> */}
    </>
  )
}

export default PageTitle
