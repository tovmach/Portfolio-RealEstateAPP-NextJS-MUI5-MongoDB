import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Box, Grid } from '@mui/material'
import Link from '../../Link'

const BuyRentSellCard = ({ title, img, text, url, buttonText }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ mt: 2 }}>
        <Image
          src={img}
          width={345}
          height={180}
          objectFit='contain' // or objectFit="cover"
          alt={title}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          textAlign={'center'}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          textAlign={'center'}
          sx={{ minHeight: 60 }}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={0} justifyContent={'center'} mb={2}>
          <Grid item>
            <Button
              sx={{ textTransform: 'none' }}
              variant='outlined'
              component={Link}
              href={url}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
export default BuyRentSellCard
