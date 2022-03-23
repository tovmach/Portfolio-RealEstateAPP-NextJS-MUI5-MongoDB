import React from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import HeroSvg from '../svg/Hero/HeroSvg'

const Hero = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Grid item container spacing={0} direction={'column'} xs={8}>
            <Grid item>
              <Box
                component={'h1'}
                sx={{
                  fontSize: '4rem',
                  color: 'primary.main',
                  fontFamily: 'Expletus Sans',
                  textAlign: 'center',
                  lineHeight: 1,
                  my: 1,
                  span: {
                    color: 'secondary.main',
                  },
                }}
              >
                Find Your Next <span>Perfect Place</span>
                To Live
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '1.25rem',
                  textAlign: 'center',
                  color: '#7D98A1',
                  mb: 2,
                }}
              >
                RealEstate.com its offer customers an on-demand experience
                forselling, buying, renting and providing transparency and
                end-to-end service.
              </Box>
            </Grid>
            <Grid item container spacing={2} justifyContent={'center'}>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Image
              width={336}
              height={400}
              objectFit='cover'
              src={'/webMedia/cabin.svg'}
              alt='cabine'
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Hero
