import React from 'react'
import PropertySearchBar from '../../components/PropertySearchBar'
import PropertyCardList from '../../components/Card/PropertyCardList'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Box, Typography, Button, Container } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { amber } from '@mui/material/colors'
import Link from '../../components/Link'

const AdminPage = ({ data }) => {
  const ITEMS_PER_PAGE = 6
  const count = data.length
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

  const [page, setPage] = useState(1)
  const [items, setItems] = useState(data.slice(0, ITEMS_PER_PAGE))

  const handleChange = (event, value) => {
    setPage(value)
    const skip = (value - 1) * ITEMS_PER_PAGE
    setItems(data.slice(skip, skip + ITEMS_PER_PAGE))
  }

  return (
    <>
      <Typography
        component={'h1'}
        textAlign={'center'}
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          color: 'primary.main',
        }}
      >
        Admin Panel
      </Typography>

      <Button
        component={Link}
        href={'/admin/new-property'}
        sx={{
          bgcolor: amber[600],
          '&:hover': {
            bgcolor: amber[500],
          },
          mb: 1,
          width: { xs: '100% - 32px', xlg: 1055 },
          mx: { xs: 2, xlg: 'auto' },
        }}
        variant='contained'
        endIcon={<AddIcon />}
      >
        Add new
      </Button>

      <Box id='propertyCardListStart' />
      <PropertyCardList data={items} />

      {pageCount > 1 && (
        <Stack spacing={2} mx={'auto'} my={2}>
          <ScrollLink
            to='propertyCardListStart'
            smooth={true}
            duration={1000}
            delay={200}
          >
            <Pagination
              sx={{ '&& .Mui-selected': { color: 'white' } }}
              count={pageCount}
              color='secondary'
              page={page}
              onChange={handleChange}
            />
          </ScrollLink>
        </Stack>
      )}
    </>
  )
}

export default AdminPage

export const getServerSideProps = async () => {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {},
    (e) => console.error(e)
  )

  let data = await Property.find().lean().sort({ $natural: -1 })

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
    },
  }
}
