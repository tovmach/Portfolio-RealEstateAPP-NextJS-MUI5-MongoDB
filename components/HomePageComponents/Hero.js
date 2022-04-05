import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import Link from '../Link'
import { Link as ScrollLink } from 'react-scroll'
const Hero = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{ mb: 2 }}
        >
          <Grid item container spacing={0} direction={'column'} xs={12} md={8}>
            <Grid item>
              <Box
                component={'h1'}
                sx={{
                  fontSize: { xs: '2.75rem', md: '3.25rem' },
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
                service for renting, buying or selling real estate in Costa del
                Sol, Spain.
              </Box>
            </Grid>
            <Grid item container spacing={2} justifyContent={'center'}>
              <Grid item>
                <Button
                  variant='outlined'
                  color='secondary'
                  component={Link}
                  href={'/properties'}
                >
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <ScrollLink
                  to='services'
                  smooth={true}
                  duration={1000}
                  offset={-5}
                >
                  <Button
                    variant='contained'
                    color='secondary'
                    sx={{ color: 'white' }}
                  >
                    Learn More
                  </Button>{' '}
                </ScrollLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: 'none', md: 'block' } }}
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
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 160, sm: 250 }, //160
            mb: 0,
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Image
            src='/webMedia/quite_town.svg'
            layout='fill'
            objectFit='contain'
            alt='RealEstate'
          />
        </Box>
      </Container>
    </>
  )
}

export default Hero
