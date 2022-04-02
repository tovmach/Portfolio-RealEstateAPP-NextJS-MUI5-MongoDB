import React from 'react'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRef } from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Container, Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const CloudinaryMediaLibraryButton = ({ id, cloudName, apiKey }) => {
  const cloudinary = useRef()

  function showWidget() {
    let selectedImage

    const ml = cloudinary.current.createMediaLibrary(
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
    cloudinary.current = window.cloudinary
  }

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
          color='primary'
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
