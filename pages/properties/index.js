import React from 'react'
import PropertySearchBar from '../../components/PropertySearchBar'
import PropertyCardList from '../../components/Card/PropertyCardList'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const PropertiesPage = () => {
  return (
    <>
      <PropertySearchBar />
    </>
  )
}

export default PropertiesPage
