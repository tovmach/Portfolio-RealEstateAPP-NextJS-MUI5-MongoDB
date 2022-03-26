import React from 'react'
import PropertySearchBar from '../../components/PropertySearchBar'
import PropertyCardList from '../../components/Card/PropertyCardList'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const PropertiesPage = ({ data }) => {
  return (
    <>
      <PropertySearchBar />
      <PropertyCardList data={data} />
    </>
  )
}

export default PropertiesPage

export const getStaticProps = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {},
    (e) => console.error(e)
  )

  let data = await Property.find({
    operation: 'buy',
  }).lean()

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
    },
  }
}
