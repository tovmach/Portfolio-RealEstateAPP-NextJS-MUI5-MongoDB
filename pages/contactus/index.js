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
  const [contactedPropertiesData, setContactedPropertiesData] = useState([])

  const ITEMS_PER_PAGE = 6

  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  const ctxContactedPropertiesList = useContactedPropertiesList()

  const [items, setItems] = useState(
    contactedPropertiesData.slice(0, ITEMS_PER_PAGE)
  )

  const [loading, setLoading] = useState(true)

  const handleChange = (event, value) => {
    setPage(value)
    const skip = (value - 1) * ITEMS_PER_PAGE
    setItems(contactedPropertiesData.slice(skip, skip + ITEMS_PER_PAGE))
  }

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
          setLoading(false)

          const count = result.data.items.length
          setPageCount(Math.ceil(count / ITEMS_PER_PAGE))
          if (page === 1) {
            setItems(result.data.items.slice(0, ITEMS_PER_PAGE))
          }
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

export default ContactUsPage
