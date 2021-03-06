import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

const ContactContext = createContext({
  contactData: {},
  addContactData: function (name, email, phone) {},
})

export const useContactData = () => {
  return useContext(ContactContext)
}

const ContactDataContextProvider = ({ children }) => {
  const [contactData, setContactData] = useState({})

  useEffect(() => {
    const contactDataFromLocal = JSON.parse(localStorage.getItem('contactData'))

    if (contactDataFromLocal === null) {
      localStorage.setItem('contactData', JSON.stringify({}))
    } else {
      if (Object.keys(contactDataFromLocal).length > 0) {
        setContactData(contactDataFromLocal)
      }
    }
  }, [])

  const addContactData = (name, email, phone) => {
    localStorage.setItem('contactData', JSON.stringify({ name, email, phone }))
    setContactData({ name, email, phone })
  }

  const context = {
    contactData,
    addContactData,
  }

  return (
    <ContactContext.Provider value={context}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactDataContextProvider
