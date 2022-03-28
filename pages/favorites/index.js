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
import ComponentTitle from '../../components/ui/ComponentTitle'
import NoDataMessage from '../../components/ui/NoDataMessage'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const FavoritesPage = () => {
  const [page, setPage] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(0)

  const handleChange = (event, value) => {
    setPage(value)
  }

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
        .post(`/api/properties-from-id-list?page=${page}`, {
          listOfIds,
        })
        .then((result) => {
          setFavoritesData(result.data.items)
          setPageCount(result.data.pagination.pageCountRoundUp)
          setLoading(false)
        })
    } else {
      setFavoritesData([])
    }
  }, [ctxFavoritesPropertyListContext.favorites, page])

  return (
    <>
      <Container maxWidth='lg'>
        <ComponentTitle h2={'Favorites'} h3={'Properties you liked'} />
      </Container>
      {loading ? (
        <CircularProgress color='secondary' sx={{ mx: 'auto' }} />
      ) : favoritesData.length === 0 ? (
        <NoDataMessage text={"You didn't like any properties yet"} />
      ) : (
        <>
          <PropertyCardList data={favoritesData} />
          {pageCount > 1 && (
            <Stack spacing={2} mx={'auto'} my={2}>
              <Pagination
                count={pageCount}
                color='secondary'
                page={page}
                onChange={handleChange}
                sx={{ '&& .Mui-selected': { color: 'white' } }}
              />
            </Stack>
          )}
        </>
      )}
    </>
  )
}

export default FavoritesPage
