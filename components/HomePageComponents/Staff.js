import React from 'react'
import PhotoStaff from '../ui/PhotoStaff'
import Container from '@mui/material/Container'
import StaffPresentation from '../ui/StaffPresentation'
import Grid from '@mui/material/Grid'
const Staff = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={3} alignItems={'center'}>
          <Grid item xs={12} md={6} lg={5}>
            <PhotoStaff img={'/webMedia/staff.png'} />
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
