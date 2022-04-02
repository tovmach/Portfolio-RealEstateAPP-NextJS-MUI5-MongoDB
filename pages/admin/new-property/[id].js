import React from 'react'
import CloudinaryMediaLibrary from '../../../components/adminPageComponents/CloudinaryMediaLibrary'
import Button from '@mui/material/Button'
import { amber } from '@mui/material/colors'
import Link from '../../../components/Link'
import Container from '@mui/material/Container'

const MediaUpload = ({ id, cloudName, apiKey }) => {
  console.log(id)
  return (
    <>
      <Container maxWidth='lg'>
        <Button
          fullWidth
          component={Link}
          href={'/admin'}
          variant='contained'
          sx={{
            bgcolor: amber[600],
            '&:hover': {
              bgcolor: amber[500],
            },
            mb: 2,
          }}
        >
          Done
        </Button>
      </Container>

      <CloudinaryMediaLibrary id={id} cloudName={cloudName} apiKey={apiKey} />
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
