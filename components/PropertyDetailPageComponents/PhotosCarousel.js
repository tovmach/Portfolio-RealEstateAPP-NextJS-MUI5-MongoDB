import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards, EffectFade } from 'swiper'

import Box from '@mui/material/Box'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function PhotosCarousel() {
  const matchesXS = useMediaQuery('(min-width:600px)')
  const effect = matchesXS ? EffectFade : EffectCards

  const imgList = [
    '/demo-house/demo-house-0.jpg',
    '/demo-house/demo-house-1.jpg',
    '/demo-house/demo-house-2.jpg',
    '/demo-house/demo-house-3.jpg',
    '/demo-house/demo-house-4.jpg',
    '/demo-house/demo-house-5.jpg',
    '/demo-house/demo-house-6.jpg',
  ]

  return (
    <Box
      sx={{
        '.swiper': {
          width: { xs: 180, sm: 600 },
          height: 400,
        },
        '& .swiper-slide': {
          borderRadius: 2,
        },
      }}
    >
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[effect]}
        className='mySwiper'
      >
        {imgList.map((img) => (
          <SwiperSlide key={img}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Image src={img} layout='fill' objectFit='cover' alt={` photo`} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
