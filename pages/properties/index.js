import React from 'react'
import PropertySearchBar from '../../components/PropertySearchBar'
import PropertyCardList from '../../components/Card/PropertyCardList'

const data = [
  {
    price: 10000000,
    livingArea: 5000,
    bedroom: 20,
    bathroom: 15,
    _id: 1,
    img: '/villa.jpg',
    type: 'villa',
    city: 'estepona',
    province: 'madrid',
  },
]

const PropertiesPage = () => {
  return (
    <>
      <PropertySearchBar />
      <PropertyCardList data={data} />
    </>
  )
}

export default PropertiesPage
