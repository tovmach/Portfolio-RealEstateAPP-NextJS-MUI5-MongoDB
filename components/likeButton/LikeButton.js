import React from 'react'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'
import { useEffect } from 'react'
import { useFavoritesPropertiesList } from './FavoritesPropertiesListContext'

const LikeButton = ({ id, size }) => {
  const [favoriteButtonActiv, setFavoriteButtonActiv] = useState(false)

  const ctxFavoritesPropertiesList = useFavoritesPropertiesList()

  useEffect(() => {
    if (ctxFavoritesPropertiesList.favorites.includes(id)) {
      setFavoriteButtonActiv(true)
    }
  }, [ctxFavoritesPropertiesList.favorites, id])

  const favoritesHandler = () => {
    setFavoriteButtonActiv((prev) => {
      if (prev === false) {
        setFavoriteButtonActiv(true)
        ctxFavoritesPropertiesList.addPropertyToList(id)
      } else {
        setFavoriteButtonActiv(false)
        ctxFavoritesPropertiesList.removePropertyFromList(id)
      }
    })
  }

  return (
    <IconButton
      aria-label='add to favorites'
      onClick={favoritesHandler}
      size={size}
    >
      <FavoriteIcon
        sx={{ color: favoriteButtonActiv && '#FF6584' }}
        fontSize='inherit'
      />
    </IconButton>
  )
}

export default LikeButton
