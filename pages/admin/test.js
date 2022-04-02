import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import Image from 'next/image'
import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'

const test = () => {
  useEffect(() => {
    axios.get('/api/get-list-img-from-id').then((result) => console.log(result))
  }, [])

  return (
    <Box sx={{ height: 400, width: 600, mx: 'auto' }}>
      <Image
        alt='The guitarist in the concert.'
        src='https://res.cloudinary.com/dxw1puk3t/image/upload/v1648903388/property/624841b2634cc64906cbef98/photo-1648887376946-b77f3845903b_tqb8eh.jpg'
        width={600}
        height={400}
        layout='responsive'
      />
    </Box>
  )
}

export default test
