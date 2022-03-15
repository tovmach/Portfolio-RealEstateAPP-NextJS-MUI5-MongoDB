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

const PropertyCard = ({ price, m2, bedroom, bathroom, id, src, location }) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      {/* <CardMedia component='img' height='250' image={src} alt='Paella dish' /> */}
      <CardMedia component={Link} href={`/properties/${id}`}>
        <Image
          src={src}
          alt={`Property ${location}`}
          width={350}
          height={250}
        />
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
              {price}
            </Box>
          </Grid>
          <Grid container item xs={5} justifyContent={'flex-end'}>
            <Grid item>
              <IconButton aria-label='send mail'>
                <SendIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label='add to favorites'
                component={Link}
                href={`/properties/${id}`}
              >
                <ReadMoreIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant='body2' color='text.secondary'>
          {location}
        </Typography>
        <Grid container>
          <Grid container mt={2} alignItems={'flex-end'} xs>
            <Grid item mr={1}>
              <LivingAreaIcon sx={{ fontSize: 14 }} />
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                Living area
              </Typography>
              <Typography variant='body2' color='#2B3F65'>
                {m2} m2
              </Typography>
            </Grid>
          </Grid>
          <Grid container mt={2} alignItems={'flex-end'} xs>
            <Grid item mr={1}>
              <BedroomIcon sx={{ fontSize: 18 }} />
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
          <Grid container mt={2} alignItems={'flex-end'} xs>
            <Grid item mr={1}>
              <BathroomIcon sx={{ fontSize: 18 }} />
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
        </Grid>
      </CardContent>
      {/* <CardActions disableSpacing>
          <IconButton aria-label='more'>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions> */}
    </Card>
  )
}

export default PropertyCard