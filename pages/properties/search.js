import React from 'react'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import Container from '@mui/material/Container'
import PropertyCardList from '../../components/Card/PropertyCardList'

const SearchPropertiesPage = ({ data }) => {
  return (
    <>
      <Container maxWidth='lg'>
        <PropertyCardList data={data} />
      </Container>
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

  console.log(searchQuery)

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
    },
  }
}