import React from 'react'
import PhotosCarousel from '../../components/PropertyDetailPageComponents/PhotosCarousel'
import { Box, Tooltip, Typography } from '@mui/material'
import ContactForm from '../../components/ContactForm'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import { Paper, Container } from '@mui/material'
import PhotosCarouselInfiniteLoop from '../../components/PropertyDetailPageComponents/PhotosCarouselInfiniteLoop'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const PropertyDetailPage = ({ data }) => {
  const item = data[0]
  return (
    <>
      {/* <Box mt={2}>
        <PhotosCarousel />
      </Box> */}

      <Box mt={2}>
        <PhotosCarouselInfiniteLoop />
      </Box>

      <Box mt={2}>
        <Typography
          sx={{ fontSize: '2.5rem', color: 'primary.main', fontWeight: 'bold' }}
          textAlign={'center'}
        >
          {capitalizeFirstLetter(item.type)} in{' '}
          {capitalizeFirstLetter(item.city)} for{' '}
          {item.operation === 'buy' ? 'Sale' : 'Rent'}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: 'secondary.main',
            fontWeight: 'bold',
          }}
          variant='body1'
          color='initial'
          textAlign={'center'}
        >
          {numberWithCommas(item.price)} €
        </Typography>
      </Box>
      <Box mt={4}>
        <ContactForm data={item} />
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

  return {
    props: {
      data,
    },
  }
}
