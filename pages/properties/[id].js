import React from 'react'
import { Box } from '@mui/material'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import PhotosCarouselInfiniteLoop from '../../components/PropertyDetailPageComponents/PhotosCarouselInfiniteLoop'
import TitleAndLikeButton from '../../components/PropertyDetailPageComponents/TitleAndLikeButton'
import PropertyDescription from '../../components/PropertyDetailPageComponents/PropertyDescription'
import PropertyFeatures from '../../components/PropertyDetailPageComponents/PropertyFeatures'
import PropertyContactForm from '../../components/PropertyDetailPageComponents/PropertyContactForm'

const PropertyDetailPage = ({ data }) => {
  const item = data[0]
  return (
    <Box mt={-1}>
      <PhotosCarouselInfiniteLoop />
      <Box
        sx={{
          bgcolor: 'white',
          maxWidth: 1152,
          borderRadius: '0 0 8px 8px',
          mx: 'auto',
        }}
      >
        <TitleAndLikeButton
          type={item.type}
          city={item.city}
          operation={item.operation}
          id={item._id}
        />
        <PropertyFeatures item={item} />
        <PropertyDescription item={item} />
        <Box mt={4} pb={1}>
          <PropertyContactForm item={item} />
        </Box>
      </Box>
    </Box>
  )
}

export default PropertyDetailPage

export const getStaticProps = async (ctx) => {
  const query = ctx.params.id
  // params
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {
      console.log('connected')
    },
    (e) => console.error(e)
  )

  let data = await Property.find({
    _id: query,
  }).lean()

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {
      console.log('connected')
    },
    (e) => console.error(e)
  )

  let data = await Property.find({}, { _id: 1 }).lean()

  data = JSON.parse(JSON.stringify(data))

  const params = data.map((item) => ({ params: { id: item._id } }))

  return {
    paths: params,
    fallback: 'blocking',
  }
}
