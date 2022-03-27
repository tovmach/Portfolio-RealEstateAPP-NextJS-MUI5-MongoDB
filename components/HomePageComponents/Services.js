import React from 'react'
import ArchPhoto from '../ui/ArchPhoto'
import Grid from '@mui/material/Grid'
import ComponentTitle from '../ui/ComponentTitle'
import Container from '@mui/material/Container'
import AccordionBox from '../ui/AccordionBox'

const Services = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          mt={1}
          mb={2}
          justifyContent={'center'}
        >
          <Grid item container spacing={0} md>
            <Grid item>
              <ComponentTitle h2={'Services'} h3={'Value We Give To You'} />
            </Grid>
            <Grid item>
              <AccordionBox />
            </Grid>
          </Grid>
          <Grid item>
            <ArchPhoto
              img={'/webMedia/green-balconies.jpg'}
              width={400}
              height={470}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Services
