import React from 'react'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRef } from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Container, Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { indigo } from '@mui/material/colors'

const CloudinaryMediaLibraryButton = ({ id, cloudName, apiKey }) => {
  const [cloudinaryState, setCloudinaryState] = useState()

  function showWidget() {
    let selectedImage

    const ml = cloudinaryState.createMediaLibrary(
      {
        cloud_name: cloudName,
        api_key: apiKey,
        // multiple: false,
        remove_header: true,
        folder: {
          path: `property/${id}`,
        },
      },
      {
        insertHandler: (data) => {
          data.assets.forEach((asset) => {
            console.log('Inserted asset:', asset)
            selectedImage = asset.public_id
            console.log(selectedImage)
          })
        },
      }
    )
    ml.show()
  }

  function handleOnLoad() {
    const cloud = window.cloudinary
    setCloudinaryState(cloud)
  }

  useEffect(() => {
    const cloud = window.cloudinary
    setCloudinaryState(cloud)
  }, [])

  return (
    <>
      <Script
        id='cloudinary'
        src='https://media-library.cloudinary.com/global/all.js'
        onLoad={handleOnLoad}
      ></Script>
      <Container maxWidth='sm'>
        <Button
          fullWidth
          variant='contained'
          sx={{
            bgcolor: indigo[600],
            '&:hover': {
              bgcolor: indigo[500],
            },
          }}
          onClick={showWidget}
          endIcon={<CameraAltIcon />}
        >
          Images
        </Button>
      </Container>
    </>
  )
}

export default CloudinaryMediaLibraryButton
