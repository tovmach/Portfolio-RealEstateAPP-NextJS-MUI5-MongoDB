import React from 'react'
import PhotosCarousel from '../../components/PropertyDetailPageComponents/PhotosCarousel'
import { Box } from '@mui/material'
import ContactForm from '../../components/ContactForm'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const PropertyDetailPage = ({ data }) => {
  return (
    <>
      <Box mt={2}>
        <PhotosCarousel />
      </Box>
      <Box mt={4}>
        <ContactForm data={data[0]} />
      </Box>
    </>
  )
}

export default PropertyDetailPage

export const getServerSideProps = async (ctx) => {
  const query = ctx.query.id
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
  console.log(data)
  return {
    props: {
      data,
      query,
    },
  }
}
