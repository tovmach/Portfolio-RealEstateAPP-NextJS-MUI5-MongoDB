import React from 'react'
import ComponentTitle from '../ui/ComponentTitle'
import PropertyCardList from '../Card/PropertyCardList'
import { Box } from '@mui/material'

const LatestListings = ({ data }) => {
  return (
    <>
      <Box my={2}>
        <ComponentTitle h2={'New Properties'} h3={'Latest Listings'} />
        <PropertyCardList data={data} />
      </Box>
    </>
  )
}

export default LatestListings
