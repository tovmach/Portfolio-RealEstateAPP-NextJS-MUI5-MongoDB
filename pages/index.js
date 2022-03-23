import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import PropertySearchBar from '../components/PropertySearchBar'
import BuyRentSellContainer from '../components/HomePageComponents/BuyRentSell/BuyRentSellContainer'

const Home = () => {
  return (
    <>
      <Hero />
      <PropertySearchBar />
      <BuyRentSellContainer />
    </>
  )
}

export default Home
