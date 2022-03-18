import React from 'react'
import ContactForm from '../../components/ContactForm'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContactedPropertiesList } from '../../components/contactButton/ContactPropertyListContext'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'
import PropertyCardList from '../../components/Card/PropertyCardList'

const ContactUsPage = () => {
  const ctxContactedPropertiesList = useContactedPropertiesList()

  const [contactedPropertiesData, setContactedPropertiesData] = useState([])

  const [loading, setLoading] = useState(true)
  const [noContentFound, setNoContentFound] = useState(false)

  useEffect(() => {
    const listOfIds = ctxContactedPropertiesList.contactPropertiesList

    if (listOfIds.length > 0) {
      axios
        .post('/api/properties-from-id-list', {
          listOfIds,
        })
        .then((result) => {
          setContactedPropertiesData(result.data)
          setLoading(false)
        })
    } else {
      setNoContentFound(true)
    }
  }, [ctxContactedPropertiesList.contactPropertiesList])

  console.log(contactedPropertiesData.length)

  return (
    <>
      <ContactForm />
      <Container maxWidth='lg'>
        <Typography variant='h2' color='secondary' sx={{ fontSize: '2rem' }}>
          Contacted List
        </Typography>
        <Typography variant='h1' color='primary' sx={{ fontSize: '2.75rem' }}>
          Properties you contacted us about
        </Typography>
      </Container>
      {/* {loading && <CircularProgress color='secondary' sx={{ mx: 'auto' }} />} */}
      {noContentFound && (
        <Box sx={{ mx: 'auto', mt: 2 }}>No properties yet</Box>
      )}

      <PropertyCardList data={contactedPropertiesData} />
    </>
  )
}

export default ContactUsPage
