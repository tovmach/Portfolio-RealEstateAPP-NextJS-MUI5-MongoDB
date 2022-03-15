import React from 'react'
import Grid from '@mui/material/Grid'
import PropertyCard from './PropertyCard'
import { Container } from '@mui/material'

const PropertyCardList = ({ data }) => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4} mt={2}>
        {data.map((property) => (
          <Grid item key={property._id} xs={12} sm={6} lg={4}>
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
      </Grid>
    </Container>
  )
}

export default PropertyCardList
