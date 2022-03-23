import React from 'react'
import Grid from '@mui/material/Grid'
import BuyRentSellCard from './BuyRentSellCard'
const data = [
  {
    img: '/webMedia/buy_house.svg',
    title: 'Buy a home',
    text: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    url: '/properties/search?operation=buy&min=25000&max=500000000',
    buttonText: 'Search homes',
  },
  {
    img: '/webMedia/for_sale.svg',
    title: 'Sell a home',
    text: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    url: '/contactus',
    buttonText: 'See your options',
  },
  {
    img: '/webMedia/apartment_rent.svg',
    title: 'Reat a home',
    text: 'We’re creating a seamless online experience from shopping on the largest rental network, to applying, to paying rent.',
    url: '/properties/search?operation=rent&min=250&max=500000000',
    buttonText: 'Find rentals',
  },
]

const BuyRentSellCardList = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent={'center'}>
        {data.map((card) => (
          <Grid item key={card.title}>
            <BuyRentSellCard
              title={card.title}
              img={card.img}
              text={card.text}
              url={card.url}
              buttonText={card.buttonText}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default BuyRentSellCardList
