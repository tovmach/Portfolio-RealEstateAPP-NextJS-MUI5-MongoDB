import React from 'react'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRef } from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Container } from '@mui/material'

const CloudinaryMediaLibrary = ({ id, cloudName, apiKey }) => {
  const cloudinary = useRef()
  const [cloudinaryState, setCloudinaryState] = useState()

  console.log(cloudinaryState)

  function showWidget() {
    let selectedImage

    const ml = cloudinaryState.createMediaLibrary(
      {
        cloud_name: cloudName,
        api_key: apiKey,
        inline_container: '#container',
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

  useEffect(() => {
    if (cloudinaryState !== undefined) {
      showWidget()
    }
  }, [cloudinaryState])

  function handleOnLoad() {
    cloudinary.current = window.cloudinary

    const cloud = window.cloudinary
    setCloudinaryState(cloud)
  }

  return (
    <div>
      <Script
        id='cloudinary'
        src='https://media-library.cloudinary.com/global/all.js'
        onLoad={handleOnLoad}
      ></Script>
      <Container maxWidth='lg'>
        <Box sx={{ height: 1000 }} id='container'></Box>
      </Container>
    </div>
  )
}

export default CloudinaryMediaLibrary
