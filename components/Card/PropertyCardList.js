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
          width: { xs: 345, xmd: 730, lg: 1095 },
          mx: 'auto',
        }}
      >
        {data.map((property) => (
          <Box
            key={property._id}
            sx={{
              display: 'inline-block',
              my: { xs: '5px', sm: '10px' },
              mx: { sm: '10px' },
            }}
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
