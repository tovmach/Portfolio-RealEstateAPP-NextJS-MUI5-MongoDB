import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, Container } from '@mui/material'
import LivingAreaIcon from '../svg/Card/LivingAreaIcon'
import { blueGrey } from '@mui/material/colors'
import BedIcon from '@mui/icons-material/Bed'
import ShowerIcon from '@mui/icons-material/Shower'
import EuroIcon from '@mui/icons-material/Euro'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import CropFreeIcon from '@mui/icons-material/CropFree'
import HotTubIcon from '@mui/icons-material/HotTub'
import HouseIcon from '@mui/icons-material/House'
import BathroomIcon from '../svg/Card/BathroomIcon'
import numberWithCommas from '../../utils/numberWithCommas'

const PropertyFeatures = ({ item }) => {
  const featuresList = [
    {
      type: 'Living area',
      value: `${item.livingArea} m2`,
      icon: (
        <AspectRatioIcon
          sx={{
            fontSize: '1.5rem',
            position: 'relative',
            top: 1,
            color: 'secondary.main',
          }}
        />
      ),
    },
    {
      type: 'Plot',
      value: `${item.plot} m2`,
      icon: (
        <CropFreeIcon
          sx={{
            fontSize: '1.5rem',
            position: 'relative',
            top: 1,
            color: 'secondary.main',
          }}
        />
      ),
    },
    {
      type: 'Bedroom',
      value: `${item.bedroom} room`,
      icon: (
        <BedIcon
          sx={{
            fontSize: '1.7rem',
            position: 'relative',
            top: 4,
            color: 'secondary.main',
          }}
        />
      ),
    },
    {
      type: 'Bathroom',
      value: `${item.bathroom} room`,
      icon: (
        <BathroomIcon
          sx={{
            fontSize: '1.5rem',
            position: 'relative',
            top: 1,
            color: 'secondary.main',
          }}
        />
      ),
    },
    {
      type: 'Price',
      value: `${numberWithCommas(item.price)}`,
      icon: (
        <EuroIcon
          sx={{
            fontSize: '1.5rem',
            position: 'relative',
            top: 1,
            color: 'secondary.main',
          }}
        />
      ),
    },
  ]

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={0}
        mb={2}
        sx={{ mx: 'auto' }}
        justifyContent={'center'}
      >
        {featuresList.map((feature) =>
          feature.type === 'Plot' && item.plot === null ? (
            <></>
          ) : (
            <Grid item key={feature.type} mx={0.5}>
              <Grid item container alignItems={'flex-end'}>
                <Grid item mr={1}>
                  {feature.icon}
                </Grid>
                <Grid item>
                  <Typography
                    color='text.secondary'
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1.25rem' },
                    }}
                  >
                    {feature.type}
                  </Typography>
                  <Typography
                    color={blueGrey[800]}
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem', md: '1.25rem' },
                      fontWeight: 'bold',
                    }}
                  >
                    {feature.value}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  )
}

export default PropertyFeatures
