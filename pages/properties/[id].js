import React from 'react'
import PhotosCarousel from '../../components/PropertyDetailPageComponents/PhotosCarousel'
import { Box, Tooltip, Typography } from '@mui/material'
import ContactForm from '../../components/ContactForm'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import { Paper, Container } from '@mui/material'
import PhotosCarouselInfiniteLoop from '../../components/PropertyDetailPageComponents/PhotosCarouselInfiniteLoop'
import ComponentTitle from '../../components/ui/ComponentTitle'
import TitleAndLikeButton from '../../components/PropertyDetailPageComponents/TitleAndLikeButton'
import PropertyDescription from '../../components/PropertyDetailPageComponents/PropertyDescription'
import PropertyFeatures from '../../components/PropertyDetailPageComponents/PropertyFeatures'
import PropertyContactForm from '../../components/PropertyDetailPageComponents/PropertyContactForm'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const PropertyDetailPage = ({ data }) => {
  const item = data[0]
  return (
    <div>
      <PhotosCarouselInfiniteLoop />
      <Box
        sx={{
          bgcolor: 'white',
          maxWidth: 1152,
          borderRadius: '0 0 8px 8px',
          mx: 'auto',
          p: 1,
        }}
      >
        {/* <Box mt={2}>
        <PhotosCarousel />
      </Box> */}

        <TitleAndLikeButton
          type={item.type}
          city={item.city}
          operation={item.operation}
          id={item._id}
        />
        <PropertyFeatures item={item} />
        <PropertyDescription item={item} />
        <Box mt={4}>
          <PropertyContactForm item={item} />
        </Box>
      </Box>
    </div>
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

  return {
    props: {
      data,
    },
  }
}
