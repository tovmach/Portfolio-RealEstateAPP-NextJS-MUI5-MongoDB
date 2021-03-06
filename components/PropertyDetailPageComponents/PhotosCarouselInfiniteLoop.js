import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { Box } from '@mui/system'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function PhotosCarouselInfiniteLoop({ imgArray }) {
  const matchesLG = useMediaQuery('(min-width:1152px)')
  return (
    <>
      <Box
        sx={{
          maxWidth: 1152,

          mx: 'auto',
          '.swiper': {
            width: '100%',
            height: { xs: 230, sm: 400, md: 600 },
            borderRadius: matchesLG ? '8px 8px 0 0' : 0,
          },
          '.swiper-button-next': {
            color: 'white',
          },
          '.swiper-button-prev': {
            color: 'white',
          },
          '.swiper-pagination-bullet': {
            bgcolor: 'white',
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          {imgArray.map((img) => (
            <SwiperSlide key={img}>
              <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                  src={img}
                  layout='fill'
                  objectFit='cover'
                  alt={` photo`}
                  priority
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}
