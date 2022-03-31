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
import ComponentTitle from '../../components/ui/ComponentTitle'
import NoDataMessage from '../../components/ui/NoDataMessage'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Link } from 'react-scroll'

const ContactUsPage = () => {
  const [page, setPage] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(0)

  const handleChange = (event, value) => {
    setPage(value)
  }
  const ctxContactedPropertiesList = useContactedPropertiesList()

  const [contactedPropertiesData, setContactedPropertiesData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const listOfIdsLocalStorage = JSON.parse(
      localStorage.getItem('contactPropertiesList')
    )

    const listOfIds = ctxContactedPropertiesList.contactPropertiesList

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
          setContactedPropertiesData(result.data.items)
          setPageCount(result.data.pagination.pageCountRoundUp)
          setLoading(false)
        })
    } else {
      setContactedPropertiesData([])
    }
  }, [ctxContactedPropertiesList.contactPropertiesList, page])

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          fontSize: '2rem',
          mb: 1,
          color: 'primary.main',
        }}
      >
        Contact us
      </Box>
      <ContactForm />
      <Container maxWidth='lg'>
        <ComponentTitle h2={'Properties'} h3={'You contacted us about'} />
      </Container>

      {loading ? (
        <CircularProgress color='secondary' sx={{ mx: 'auto' }} />
      ) : contactedPropertiesData.length === 0 ? (
        <NoDataMessage text={"You didn't show interest in any property yet"} />
      ) : (
        <>
          <Box id='propertyCardListStart' />
          <PropertyCardList data={contactedPropertiesData} />
          {pageCount > 1 && (
            <Stack spacing={2} mx={'auto'} my={2}>
              <Link
                to='propertyCardListStart'
                smooth={true}
                duration={1000}
                offset={-5}
                delay={400}
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

export default ContactUsPage
