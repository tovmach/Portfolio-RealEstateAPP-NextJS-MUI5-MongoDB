import React from 'react'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'

const PageTitle = ({ h1, h2 }) => {
  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h2' color='secondary' sx={{ fontSize: '2rem' }}>
          {h1}
        </Typography>
        <Typography variant='h1' color='primary' sx={{ fontSize: '2.75rem' }}>
          {h2}
        </Typography>
      </Container>
    </>
  )
}

export default PageTitle
