import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import PropertySearchBar from '../components/PropertySearchBar'
import BuyRentSellContainer from '../components/HomePageComponents/BuyRentSell/BuyRentSellContainer'
import mongoose from 'mongoose'
import Property from '../models/propertyModel'
import LatestListings from '../components/HomePageComponents/LatestListings'
import Services from '../components/HomePageComponents/Services'
import Staff from '../components/HomePageComponents/Staff'

const Home = ({ data }) => {
  return (
    <>
      <Hero />
      <PropertySearchBar />
      <LatestListings data={data} />
      <BuyRentSellContainer />
      <Services />
      <Staff />
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {},
    (e) => console.error(e)
  )

  let data = await Property.find({
    operation: 'buy',
  })
    .lean()
    .limit(3)
    .sort({ $natural: -1 })

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
    },
  }
}
