import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Container } from '@mui/material'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{ mb: { xs: 2, sm: 4 } }}
        >
          <Grid item container spacing={0} direction={'column'} xs={12} md={8}>
            <Grid item>
              <Box
                component={'h1'}
                sx={{
                  fontSize: { xs: '2.75rem', md: '4rem' },
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
                Find Your Next <br /> <span>Perfect Place </span>
                To Live in Spain
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
                With 25 years in the business we offer end-to-end tailor-made
                service for renting buying or selling real estate in Spain
              </Box>
            </Grid>
            <Grid item container spacing={2} justifyContent={'center'}>
              <Grid item>
                <Button variant='outlined' color='secondary'>
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  sx={{ color: 'white' }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Image
              width={336}
              height={400}
              objectFit='cover'
              src={'/webMedia/cabin.svg'}
              alt='RealEstate'
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '250px',
          mb: 4,
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Image
          src='/webMedia/best_place.svg'
          layout='fill'
          objectFit='cover'
          alt='RealEstate'
        />
      </Box>
    </>
  )
}

export default Hero
