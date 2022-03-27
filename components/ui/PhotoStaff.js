import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

const PhotoStaff = ({ px, img }) => {
  const sizeBox = 500
  const imgHeight = sizeBox + sizeBox / 2.5

  return (
    <Box sx={{ height: imgHeight, display: 'flex', alignItems: 'flex-end' }}>
      <Box
        sx={{
          bgcolor: 'secondary.main',
          width: sizeBox,
          height: sizeBox,
          borderRadius: 3,
          backgroundImage: "url('/webMedia/stripes.svg')",
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: sizeBox,
            height: imgHeight,
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
