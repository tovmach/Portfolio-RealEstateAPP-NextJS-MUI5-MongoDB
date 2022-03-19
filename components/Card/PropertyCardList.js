import React from 'react'
import Grid from '@mui/material/Grid'
import PropertyCard from './PropertyCard'
import { Container } from '@mui/material'

const PropertyCardList = ({ data }) => {
  return (
    <Grid container spacing={3} mt={2} justifyContent={'center'}>
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
    </Grid>
  )
}

export default PropertyCardList
