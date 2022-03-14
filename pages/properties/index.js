import React from 'react'
import PropertySearchBar from '../../components/PropertySearchBar'
import PropertyCardList from '../../components/Card/PropertyCardList'

const data = [
  {
    price: 1000000,
    m2: 500,
    bedroom: 5,
    bathroom: 3,
    id: 1,
    src: '/villa.jpg',
    location: 'Marbella',
  },
  {
    price: 2000000,
    m2: 500,
    bedroom: 5,
    bathroom: 3,
    id: 2,
    src: '/villa.jpg',
    location: 'Marbella',
  },
  {
    price: 3000000,
    m2: 500,
    bedroom: 5,
    bathroom: 3,
    id: 3,
    src: '/villa.jpg',
    location: 'Marbella',
  },
  {
    price: 4000000,
    m2: 500,
    bedroom: 5,
    bathroom: 3,
    id: 4,
    src: '/villa.jpg',
    location: 'Marbella',
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
