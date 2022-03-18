import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const ContactedPropertiesList = createContext({
  contactPropertiesList: [],
  getPropertyList: function (id) {},
  addPropertyToList: function (id) {},
  removePropertyFromList: function (id) {},
})

export const useContactedPropertiesList = () => {
  return useContext(ContactedPropertiesList)
}

const ContactPropertyListContext = ({ children }) => {
  const [contactPropertiesList, setContactPropertiesList] = useState([])

  const getPropertyList = (id) => {
    const contactPropertiesListLocalStorage = JSON.parse(
      localStorage.getItem('contactPropertiesList')
    )

    if (contactPropertiesListLocalStorage === null) {
      localStorage.setItem('contactPropertiesList', JSON.stringify([]))
    } else {
      if (contactPropertiesListLocalStorage.length > 0) {
        setContactPropertiesList(contactPropertiesListLocalStorage)
        if (contactPropertiesListLocalStorage.includes(id)) {
          return true
        } else {
          return false
        }
      }
    }
  }

  const addPropertyToList = (id) => {
    const contactPropertiesListLocalStorage = JSON.parse(
      localStorage.getItem('contactPropertiesList')
    )
    localStorage.setItem(
      'contactPropertiesList',
      JSON.stringify([id, ...contactPropertiesListLocalStorage])
    )
    setContactPropertiesList([id, ...contactPropertiesListLocalStorage])
  }
  const removePropertyFromList = (id) => {
    const contactPropertiesListLocalStorage = JSON.parse(
      localStorage.getItem('contactPropertiesList')
    )

    const newContactPropertiesList = contactPropertiesListLocalStorage.filter(
      (propertyId) => propertyId !== id
    )

    localStorage.setItem(
      'contactPropertiesList',
      JSON.stringify(newContactPropertiesList)
    )
    setContactPropertiesList(newContactPropertiesList)
  }

  const context = {
    contactPropertiesList,
    getPropertyList,
    addPropertyToList,
    removePropertyFromList,
  }

  return (
    <ContactedPropertiesList.Provider value={context}>
      {children}
    </ContactedPropertiesList.Provider>
  )
}

export default ContactPropertyListContext
