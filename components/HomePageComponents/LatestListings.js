import React from 'react'
import ComponentTitle from '../ui/ComponentTitle'
import PropertyCardList from '../Card/PropertyCardList'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

const LatestListings = ({ data }) => {
  return (
    <>
      <Box my={2}>
        <ComponentTitle h2={'New Properties'} h3={'Latest Listings'} />
        <Box sx={{ display: { xs: 'none', slg: 'block' } }}>
          <PropertyCardList data={data} />
        </Box>
        <Box sx={{ display: { xs: 'block', slg: 'none' } }}>
          <PropertyCardList data={[data[0], data[1]]} />
        </Box>
      </Box>
    </>
  )
}

export default LatestListings
