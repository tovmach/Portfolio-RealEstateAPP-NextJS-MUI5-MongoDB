import React from 'react'
import Grid from '@mui/material/Grid'
import PropertyCard from './PropertyCard'
import { Container } from '@mui/material'

const PropertyCardList = ({ data }) => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={4} mt={2}>
        {data.map((property) => (
          <Grid item key={property.id} xs={12} sm={6} lg={4}>
            <PropertyCard
              price={property.price}
              m2={property.m2}
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              id={property.id}
              src={property.src}
              location={property.location}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PropertyCardList
