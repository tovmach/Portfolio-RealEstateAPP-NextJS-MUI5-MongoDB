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
          width: { xs: 345, sm: widthBox - 30, lg: widthBox },
          height: { xs: 395, sm: heighthBox - 30, lg: heighthBox },
          borderRadius: '300px 300px 10px 10px',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            bgcolor: '#C5E2E9',
            width: { xs: 305, sm: widthBox - 70, lg: widthBox - 40 },
            height: { xs: 355, sm: heighthBox - 70, lg: heighthBox - 40 },
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
