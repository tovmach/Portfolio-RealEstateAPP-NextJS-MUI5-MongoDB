import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

const imgHeight = (height) => {
  return height + height / 2.5
}

const PhotoStaff = ({ px, img }) => {
  const sizeBoxXs = 345
  const sizeBox = 450

  return (
    <Box
      sx={{
        height: { xs: imgHeight(sizeBoxXs), md: imgHeight(sizeBox) },
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Box
        sx={{
          bgcolor: 'secondary.main',
          width: { xs: sizeBoxXs - 25, md: sizeBox - 50 },
          height: { xs: sizeBoxXs, md: sizeBox },
          borderRadius: 3,
          backgroundImage: "url('/webMedia/topography.svg')",
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: { xs: sizeBoxXs, md: sizeBox },
            height: { xs: imgHeight(sizeBoxXs), md: imgHeight(sizeBox) },
            bottom: 0,
            left: 0,
          }}
        >
          <Image
            src={'/webMedia/staff.png'}
            layout='fill'
            objectFit='contain'
            alt='staff'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default PhotoStaff
