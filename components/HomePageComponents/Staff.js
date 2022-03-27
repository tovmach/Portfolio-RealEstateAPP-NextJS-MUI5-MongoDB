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
          <Grid item xs>
            <PhotoStaff px={400} img={'/webMedia/staff.png'} />
          </Grid>
          <Grid item xs>
            <StaffPresentation />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Staff
