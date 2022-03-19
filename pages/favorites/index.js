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

const FavoritesPage = () => {
  const ctxFavoritesPropertyListContext = useFavoritesPropertiesList()

  const [favoritesData, setFavoritesData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const listOfIdsLocalStorage = JSON.parse(localStorage.getItem('favorites'))

    const listOfIds = ctxFavoritesPropertyListContext.favorites

    if (listOfIdsLocalStorage.length === 0) {
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
      <Container maxWidth='lg'>
        <Typography variant='h2' color='secondary' sx={{ fontSize: '2rem' }}>
          Favorites
        </Typography>
        <Typography variant='h1' color='primary' sx={{ fontSize: '2.75rem' }}>
          Properties you liked
        </Typography>
      </Container>

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

// import React from 'react'
// import PropertyCardList from '../../components/Card/PropertyCardList'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import CircularProgress from '@mui/material/CircularProgress'
// import { Box } from '@mui/material'

// const FavoritesPage = () => {
//   const [favoritesData, setFavoritesData] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const listOfIds = JSON.parse(localStorage.getItem('favorites'))

//     if (listOfIds === null) {
//       localStorage.setItem('favorites', JSON.stringify([]))
//       setLoading(false)
//     }
//     if (listOfIds.length !== 0) {
//       axios
//         .post('/api/properties-from-id-list', {
//           listOfIds,
//         })
//         .then((result) => {
//           setFavoritesData(result.data)
//           setLoading(false)
//         })
//     } else {
//       setLoading(false)
//     }
//   }, [])

//   return (
//     <>
//       <Container maxWidth='lg'>
//         <Typography variant='h2' color='secondary' sx={{ fontSize: '2rem' }}>
//           Favorites
//         </Typography>
//         <Typography variant='h1' color='primary' sx={{ fontSize: '2.75rem' }}>
//           Properties you liked
//         </Typography>
//       </Container>
//       {loading && <CircularProgress color='secondary' sx={{ mx: 'auto' }} />}
//       {!loading && favoritesData.length === 0 ? (
//         <Box sx={{ mx: 'auto', mt: 2 }}>No Favorites</Box>
//       ) : (
//         <PropertyCardList data={favoritesData} />
//       )}
//     </>
//   )
// }

// export default FavoritesPage

// JSON.parse(localStorage.getItem('favorites')).length === 0
