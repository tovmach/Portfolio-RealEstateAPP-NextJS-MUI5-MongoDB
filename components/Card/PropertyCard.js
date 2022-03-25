import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import SendIcon from '@mui/icons-material/Send'
import LivingAreaIcon from '../svg/Card/LivingAreaIcon'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import BedroomIcon from '../svg/Card/BedroomIcon'
import BathroomIcon from '../svg/Card/BathroomIcon'
import Link from '../Link'
import Image from 'next/image'
import LikeButton from '../likeButton/LikeButton'
import ContactButton from '../contactButton/ContactButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const PropertyCard = ({
  price,
  livingArea,
  bedroom,
  bathroom,
  _id,
  img,
  type,
  city,
  province,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250, width: 345 }}
        component={Link}
        href={`/properties/${_id}`}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={img}
            layout='fill'
            objectFit='cover'
            alt={`${type} in ${city} photo`}
          />
        </Box>
      </CardMedia>

      <CardContent>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xs>
            <Box
              sx={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#2B3F65',
                span: { color: 'secondary.main' },
              }}
            >
              <span>€ </span>
              {numberWithCommas(price)}
            </Box>
          </Grid>
          <Grid container item xs={4} justifyContent={'flex-end'}>
            <Grid item>
              <ContactButton
                id={_id}
                price={price}
                type={type}
                city={city}
                province={province}
              />
            </Grid>
            <Grid item>
              <LikeButton id={_id} />
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='body2' color='text.secondary'>
          {`${capitalizeFirstLetter(type)} in ${capitalizeFirstLetter(
            city
          )}, ${capitalizeFirstLetter(province)}`}
        </Typography>
        <Grid container>
          <Grid item container mt={2} alignItems={'flex-end'} xs={3.7}>
            <Grid item mr={1}>
              <LivingAreaIcon
                sx={{ fontSize: 14, position: 'relative', top: 1 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                Living area
              </Typography>
              <Typography variant='body2' color='#2B3F65'>
                {livingArea} m2
              </Typography>
            </Grid>
          </Grid>
          <Grid item container mt={2} alignItems={'flex-end'} xs={3.5}>
            <Grid item mr={1}>
              <BedroomIcon
                sx={{ fontSize: 18, position: 'relative', top: 4 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                Bedroom
              </Typography>
              <Typography variant='body2' color='#2B3F65'>
                {bedroom} room
              </Typography>
            </Grid>
          </Grid>
          <Grid item container mt={2} alignItems={'flex-end'} xs={3.5}>
            <Grid item mr={1}>
              <BathroomIcon
                sx={{ fontSize: 18, position: 'relative', top: 2 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                Bathroom
              </Typography>
              <Typography variant='body2' color='#2B3F65'>
                {bathroom} room
              </Typography>
            </Grid>
          </Grid>

          <Grid item alignSelf={'flex-end'}>
            <IconButton
              aria-label='Read More'
              component={Link}
              href={`/properties/${_id}`}
              sx={{ p: 1 }}
            >
              <ArrowForwardIosIcon sx={{ height: 17, width: 17 }} />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PropertyCard
