import React from 'react'
import PropertyCardList from '../../components/Card/PropertyCardList'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, Grid } from '@mui/material'
import { useFavoritesPropertiesList } from '../../components/likeButton/FavoritesPropertiesListContext'
import PageTitle from '../../components/ui/PageTitle'
import Image from 'next/image'
import NoDataMessage from '../../components/ui/NoDataMessage'

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
        <NoDataMessage text={"You didn't like any properties yet"} />
      ) : (
        <PropertyCardList data={favoritesData} />
      )}
    </>
  )
}

export default FavoritesPage

{
  /* <Container maxWidth='lg' sx={{ mt: 1 }}>
  <Grid
    container
    justifyContent={'center'}
    sx={{ mt: { xs: 3, md: 5 } }}
  >
    <Grid item>
      <Image
        src={'/webMedia/Empty_street.svg'}
        width={500}
        height={320}
        objectFit='contain' // or objectFit="cover"
        alt={'No properties found'}
      />
      <Box sx={{ textAlign: 'center', color: '#58585D' }}>
        You dident like any propertyes yet
      </Box>
    </Grid>
  </Grid>
</Container> */
}
