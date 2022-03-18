import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const FavoritesPropertiesList = createContext({
  favorites: [],
  addPropertyToList: function (id) {},
  removePropertyFromList: function (id) {},
})

export const useFavoritesPropertiesList = () => {
  return useContext(FavoritesPropertiesList)
}

const FavoritesPropertyListContext = ({ children }) => {
  const [favorites, setfavorites] = useState([])

  useEffect(() => {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'))

    if (favoritesLocalStorage === null) {
      localStorage.setItem('favorites', JSON.stringify([]))
    } else {
      if (favoritesLocalStorage.length > 0) {
        setfavorites(favoritesLocalStorage)
      }
    }
  }, [])

  const addPropertyToList = (id) => {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'))
    localStorage.setItem(
      'favorites',
      JSON.stringify([id, ...favoritesLocalStorage])
    )
    setfavorites([id, ...favoritesLocalStorage])
  }

  const removePropertyFromList = (id) => {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'))

    const newfavorites = favoritesLocalStorage.filter(
      (propertyId) => propertyId !== id
    )

    localStorage.setItem('favorites', JSON.stringify(newfavorites))
    setfavorites(newfavorites)
  }

  const context = {
    favorites,
    addPropertyToList,
    removePropertyFromList,
  }

  return (
    <FavoritesPropertiesList.Provider value={context}>
      {children}
    </FavoritesPropertiesList.Provider>
  )
}

export default FavoritesPropertyListContext
