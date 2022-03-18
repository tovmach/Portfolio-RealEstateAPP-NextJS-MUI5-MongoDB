import React from 'react'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'
import { useEffect } from 'react'
import { useFavoritesPropertiesList } from './FavoritesPropertiesListContext'

const LikeButton = ({ id }) => {
  const [favoriteButtonActiv, setFavoriteButtonActiv] = useState(false)

  const ctxFavoritesPropertiesList = useFavoritesPropertiesList()

  useEffect(() => {
    if (ctxFavoritesPropertiesList.favorites.includes(id)) {
      setFavoriteButtonActiv(true)
    }
  }, [ctxFavoritesPropertiesList.favorites, id])

  const favoritesHandler = () => {
    //const favoritesLocalData = JSON.parse(localStorage.getItem('favorites'))

    setFavoriteButtonActiv((prev) => {
      if (prev === false) {
        setFavoriteButtonActiv(true)
        ctxFavoritesPropertiesList.addPropertyToList(id)
      } else {
        setFavoriteButtonActiv(false)
        ctxFavoritesPropertiesList.removePropertyFromList(id)
      }
    })
    // setFavoriteButtonActiv((prev) => {
    //   if (prev === false) {
    //     setFavoriteButtonActiv(true)
    //     localStorage.setItem(
    //       'favorites',
    //       JSON.stringify([id, ...favoritesLocalData])
    //     )
    //   } else {
    //     setFavoriteButtonActiv(false)
    //     const newFavoritesList = favoritesLocalData.filter(
    //       (favoriteId) => favoriteId !== id
    //     )
    //     localStorage.setItem('favorites', JSON.stringify(newFavoritesList))
    //   }
    // })
  }

  return (
    <IconButton aria-label='add to favorites' onClick={favoritesHandler}>
      <FavoriteIcon sx={{ color: favoriteButtonActiv && '#FF6584' }} />
    </IconButton>
  )
}

export default LikeButton

// import React from 'react'
// import { IconButton } from '@mui/material'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const LikeButton = ({ id }) => {
//   const [favoritesList, setFavoritesList] = useState([])
//   const [favorites, setFavorites] = useState(false)

//   useEffect(() => {
//     console.log(favoritesList)
//     let favoritesLocalData = JSON.parse(localStorage.getItem('favorites'))

//     if (
//       favoritesLocalData != null &&
//       favoritesLocalData.length != 0 &&
//       favoritesList.length == 0
//     ) {
//       setFavoritesList(favoritesLocalData)
//     }

//     if (favoritesList.length > 0) {
//       localStorage.setItem('favorites', JSON.stringify(favoritesList))
//     }

//     if (favoritesList.length > 0) {
//       if (favoritesList.includes(id)) {
//         setFavorites(true)
//       }
//     }
//   }, [favoritesList])

//   const favoritesHandler = (id) => {
//     setFavorites((prev) => !prev)
//     if (favorites === false) {
//       //const newFavoritesList =
//       // favoritesList.unshift(id)
//       let likedProperties = JSON.parse(localStorage.getItem('favorites'))
//       if (likedProperties != null) {
//         setFavoritesList([id, ...likedProperties])
//       } else {
//         setFavoritesList([id])
//       }

//       //localStorage.setItem('favorites', JSON.stringify([ ...favoritesList]))
//     } else {
//       const newFavoritesList = favoritesList.filter(
//         (favoriteId) => favoriteId !== id
//       )

//       setFavoritesList(newFavoritesList)
//       localStorage.setItem('favorites', JSON.stringify(newFavoritesList))
//     }
//   }

//   return (
//     <IconButton
//       aria-label='add to favorites'
//       onClick={favoritesHandler.bind(null, id)}
//     >
//       <FavoriteIcon sx={{ color: favorites && 'red' }} />
//     </IconButton>
//   )
// }

// export default LikeButton