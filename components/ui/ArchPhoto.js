import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Paper } from '@mui/material'

const ArchPhoto = ({ width, height, img }) => {
  const widthBox = width
  const heighthBox = height
  return (
    <>
      <Box
        sx={{
          bgcolor: '#C5E2E9',
          width: widthBox,
          height: heighthBox,
          m: 3,
          borderRadius: '300px 300px 10px 10px',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            bgcolor: '#C5E2E9',
            width: widthBox - 40,
            height: heighthBox - 40,
            borderRadius: '300px 300px 10px 10px',
            overflow: 'hidden',
            position: 'relative',
            top: 20,
            left: 20,
          }}
        >
          <Image
            src={img}
            layout='fill'
            objectFit='cover' // or objectFit="cover"
            alt='Arch Photo'
          />
        </Paper>
      </Box>
    </>
  )
}

export default ArchPhoto
