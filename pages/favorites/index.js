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
import { Link } from 'react-scroll'

const FavoritesPage = () => {
  const [favoritesData, setFavoritesData] = useState([])

  const ITEMS_PER_PAGE = 6

  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  const ctxFavoritesPropertyListContext = useFavoritesPropertiesList()

  const [items, setItems] = useState(favoritesData.slice(0, ITEMS_PER_PAGE))

  const [loading, setLoading] = useState(true)

  const handleChange = (event, value) => {
    setPage(value)
    const skip = (value - 1) * ITEMS_PER_PAGE
    setItems(favoritesData.slice(skip, skip + ITEMS_PER_PAGE))
  }

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
        .post(`/api/properties-from-id-list`, {
          listOfIds,
        })
        .then((result) => {
          setFavoritesData(result.data.items)
          setLoading(false)

          const count = result.data.items.length
          setPageCount(Math.ceil(count / ITEMS_PER_PAGE))
          if (page === 1) {
            setItems(result.data.items.slice(0, ITEMS_PER_PAGE))
          }
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
          <Box id='propertyCardListStart' />
          <PropertyCardList data={items} />
          {pageCount > 1 && (
            <Stack spacing={2} mx={'auto'} my={2}>
              <Link
                to='propertyCardListStart'
                smooth={true}
                duration={1000}
                offset={-5}
                delay={200}
              >
                <Pagination
                  count={pageCount}
                  color='secondary'
                  page={page}
                  onChange={handleChange}
                  sx={{ '&& .Mui-selected': { color: 'white' } }}
                />
              </Link>
            </Stack>
          )}
        </>
      )}
    </>
  )
}

export default FavoritesPage
