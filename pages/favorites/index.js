import React from 'react'
import PropertyCardList from '../../components/Card/PropertyCardList'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'
import { useFavoritesPropertiesList } from '../../components/likeButton/FavoritesPropertiesListContext'
import PageTitle from '../../components/ui/PageTitle'

const FavoritesPage = () => {
  const ctxFavoritesPropertyListContext = useFavoritesPropertiesList()

  const [favoritesData, setFavoritesData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const listOfIdsLocalStorage = JSON.parse(localStorage.getItem('favorites'))

    const listOfIds = ctxFavoritesPropertyListContext.favorites

    if (listOfIdsLocalStorage !== null) {
      if (listOfIdsLocalStorage.length === 0) {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }

    if (listOfIds.length > 0) {
      axios
        .post('/api/properties-from-id-list', {
          listOfIds,
        })
        .then((result) => {
          setFavoritesData(result.data)
          setLoading(false)
        })
    } else {
      setFavoritesData([])
    }
  }, [ctxFavoritesPropertyListContext.favorites])

  return (
    <>
      <PageTitle h1={'Favorites'} h2={'Properties you liked'} />

      {loading ? (
        <CircularProgress color='secondary' sx={{ mx: 'auto' }} />
      ) : favoritesData.length === 0 ? (
        <Box sx={{ mx: 'auto', mt: 2 }}>No Favorites</Box>
      ) : (
        <PropertyCardList data={favoritesData} />
      )}
    </>
  )
}

export default FavoritesPage
