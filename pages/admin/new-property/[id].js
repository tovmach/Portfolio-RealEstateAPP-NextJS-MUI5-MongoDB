import React from 'react'
import Button from '@mui/material/Button'
import { amber } from '@mui/material/colors'
import Link from '../../../components/Link'
import Container from '@mui/material/Container'
import CloudinaryMediaLibraryButton from '../../../components/adminPageComponents/CloudinaryMediaLibraryButton'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Box } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import axios from 'axios'
import { useRouter } from 'next/router'

const MediaUpload = ({ id, cloudName, apiKey }) => {
  const [img, setImg] = useState()

  const router = useRouter()

  const onSubmitHandler = () => {
    axios
      .post('/api/add-property-set-photo', {
        id,
        img,
      })
      .then((response) => {
        setImg('')
        router.push('/admin')
      })
  }

  return (
    <>
      <Container maxWidth='sm'>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Upload the Images
        </Typography>
        <TextField
          fullWidth
          autoComplete='off'
          label='Main Image Link'
          variant='outlined'
          value={img}
          onChange={(e) => {
            setImg(e.target.value)
          }}
        />
      </Container>
      <Box my={1}>
        <CloudinaryMediaLibraryButton
          id={id}
          cloudName={cloudName}
          apiKey={apiKey}
        />
      </Box>

      <Container maxWidth='sm'>
        <Button
          fullWidth
          onClick={onSubmitHandler}
          variant='contained'
          color='success'
          endIcon={<AddIcon />}
        >
          Create
        </Button>
      </Container>
    </>
  )
}

export default MediaUpload

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY

  return {
    props: {
      id,
      cloudName,
      apiKey,
    },
  }
}
