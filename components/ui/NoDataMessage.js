import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Image from 'next/image'

const NoDataMessage = ({ text }) => {
  return (
    <Container maxWidth='lg'>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Image
            src={'/webMedia/empty_street.svg'}
            width={500}
            height={320}
            objectFit='contain' // or objectFit="cover"
            alt={'No properties found'}
          />
          <Box sx={{ textAlign: 'center', color: '#58585D' }}>{text}</Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NoDataMessage
