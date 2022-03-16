import React from 'react'
import PropertyCardList from '../../components/Card/PropertyCardList'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const FavoritesPage = () => {
  const [favoritesData, setFavoritesData] = useState([])

  useEffect(() => {
    const listOfIds = JSON.parse(localStorage.getItem('favorites'))

    if (listOfIds === null) {
      localStorage.setItem('favorites', JSON.stringify([]))
    }
    if (listOfIds.length !== 0) {
      axios
        .post('/api/properties-from-id-list', {
          listOfIds,
        })
        .then((result) => setFavoritesData(result.data))
    }
  }, [])
  console.log(favoritesData)

  return (
    <>
      {favoritesData.length === 0 ? (
        <p>no favorites</p>
      ) : (
        <PropertyCardList data={favoritesData} />
      )}
    </>
  )
}

export default FavoritesPage
