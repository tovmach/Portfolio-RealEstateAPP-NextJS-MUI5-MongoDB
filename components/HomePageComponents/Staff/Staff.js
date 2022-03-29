import React from 'react'
import StaffPhoto from './StaffPhoto'
import Container from '@mui/material/Container'
import StaffPresentation from './StaffPresentation'
import Grid from '@mui/material/Grid'
const Staff = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={3} alignItems={'center'} mb={2}>
          <Grid item xs={12} md={6} lg={5}>
            <StaffPhoto img={'/webMedia/staff.png'} />
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <StaffPresentation />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Staff
