import React from 'react'
import Grid from '@mui/material/Grid'
import PropertyCard from './PropertyCard'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
const PropertyCardList = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: 350, xmd: 740, lg: 1110 },
          // width: { xs: 350, md: 700, lg: 1050 },
          mx: 'auto',
        }}
      >
        {data.map((property) => (
          <Box
            key={property._id}
            sx={{ display: 'inline-block', mx: { sm: '10px' } }}
          >
            <PropertyCard
              type={property.type}
              price={property.price}
              livingArea={property.livingArea}
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              _id={property._id}
              img={property.img}
              city={property.city}
              province={property.province}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default PropertyCardList

{
  /* <Grid container spacing={3} mt={2} justifyContent={'center'}>
{data.map((property) => (
  <Grid item key={property._id}>
    <PropertyCard
      type={property.type}
      price={property.price}
      livingArea={property.livingArea}
      bedroom={property.bedroom}
      bathroom={property.bathroom}
      _id={property._id}
      img={property.img}
      city={property.city}
      province={property.province}
    />
  </Grid>
))}
</Grid> */
}
