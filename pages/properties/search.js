import React from 'react'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import Container from '@mui/material/Container'
import PropertyCardList from '../../components/Card/PropertyCardList'
import PropertySearchBar from '../../components/PropertySearchBar'
import Image from 'next/image'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { useEffect } from 'react'

const SearchPropertiesPage = ({ data, query }) => {
  const ITEMS_PER_PAGE = 6
  const count = data.length
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])

  const handleChange = (event, value) => {
    setPage(value)
    const skip = (value - 1) * ITEMS_PER_PAGE

    setItems(data.slice(skip, skip + ITEMS_PER_PAGE))
  }

  console.log(data)

  useEffect(() => {
    setItems(data.slice(0, ITEMS_PER_PAGE))
  }, [data])

  return (
    <>
      <PropertySearchBar
        operationFromQuery={query.operation}
        typeFromQuery={query.type}
        locationFromQuery={query.location}
        minFromQuery={query.min}
        maxFromQuery={query.max}
      />
      {data.length > 0 && (
        <>
          <PropertyCardList data={items} />
          {pageCount > 1 && (
            <Stack spacing={2} mx={'auto'} my={2}>
              <Pagination
                count={pageCount}
                color='secondary'
                page={page}
                onChange={handleChange}
              />
            </Stack>
          )}
        </>
      )}
      {data.length === 0 && (
        <Grid container justifyContent={'center'} sx={{ mt: { xs: 3, md: 5 } }}>
          <Grid item>
            <Image
              src={'/webMedia/feeling_blue.svg'}
              width={500}
              height={320}
              objectFit='contain' // or objectFit="cover"
              alt={'No properties found'}
            />
            <Box sx={{ textAlign: 'center', color: '#58585D' }}>
              No properties found with your search criteria.
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default SearchPropertiesPage

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const query = ctx.query

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  let searchQuery = {
    operation: query.operation,
    price: { $gte: query.min, $lte: query.max },
  }

  if (query.type) {
    searchQuery.type = query.type
  }
  if (query.location) {
    searchQuery.city = query.location
  }

  await mongoose.connect(
    connectionString,
    () => {
      console.log('connected')
    },
    (e) => console.error(e)
  )

  let data = await Property.find({
    ...searchQuery,
    // operation: query.operation,
    // price: { $gte: query.min, $lte: query.max },
  }).lean()

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
      query,
    },
  }
}
