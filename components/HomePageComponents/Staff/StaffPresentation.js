import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GppGoodIcon from '@mui/icons-material/GppGood'
import { Box } from '@mui/material'
import EuroIcon from '@mui/icons-material/Euro'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DiamondIcon from '@mui/icons-material/Diamond'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Paper } from '@mui/material'

const BoxWhitIcon = ({ badgeColor, mainText, descriptionText, icon }) => {
  return (
    <Paper
      sx={{
        // width: { xs: 345, sm: 260, md: 195, lg: 318 },
        minWidth: 195,
        maxWidth: 400,
        // height: { md: 214, lg: 'auto' },
        height: '100%',
        bgcolor: 'white',
        borderRadius: 3,
        p: 2,
      }}
    >
      <Grid
        container
        spacing={1}
        direction={'column'}
        justifyContent={'center'}
      >
        <Grid item>
          <Box
            sx={{
              p: 0.65,
              bgcolor: badgeColor,
              height: 40,
              width: 40,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                p: 0.4,
                bgcolor: 'rgba(255, 255, 255, 0.25)',
                height: 30,
                width: 30,
                borderRadius: 30,
              }}
            >
              {icon}
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            {mainText}
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            {descriptionText}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

const StaffPresentation = () => {
  return (
    <>
      <Grid container spacing={1} direction={'column'}>
        <Grid item container spacing={0} sx={{ position: 'relative', top: 10 }}>
          <Grid item>
            <GppGoodIcon sx={{ color: '#7AA7FC' }} />
          </Grid>
          <Grid item>
            <Typography sx={{ color: '#7AA7FC' }}>Our Advantage</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontSize: '2rem',
            }}
          >
            John Smith
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: 'rgba(0, 0, 0, 0.75)',
              maxWidth: { xs: 410, lg: 450 },
            }}
          >
            John Smith was an American actor whose career primarily focused on
            westerns.
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid
            item
            container
            spacing={{ xs: 2, lg: 2 }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            // alignItems={'stretch'}
          >
            <Grid item xs>
              <BoxWhitIcon
                badgeColor={'#D18CE0'}
                // badgeColor={'#FF6584'}
                mainText={'Experience'}
                descriptionText={
                  '20+ years in the market and hundreds of happy clients.'
                  // 'More than 20 years in the market and hundreds of happy clients.'
                }
                icon={<PriorityHighIcon sx={{ color: '#ffffff' }} />}
              />
            </Grid>
            <Grid item xs>
              <BoxWhitIcon
                badgeColor={'#FF6584'}
                //blue badgeColor={'#7AA7FC'}
                mainText={'Location'}
                descriptionText={
                  'We know all the ins and outs, if your looking for it we have it.'
                }
                icon={<LocationOnIcon sx={{ color: '#ffffff' }} />}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Grid item xs>
              <BoxWhitIcon
                badgeColor={'#7AA7FC'}
                // badgeColor={'#A2D5AB'}
                mainText={'Reputation'}
                descriptionText={
                  'We are one of the most well-known agenesis in the area.'
                }
                icon={<DiamondIcon sx={{ color: '#ffffff' }} />}
              />
            </Grid>
            <Grid item xs>
              <BoxWhitIcon
                badgeColor={'#A2D5AB'}
                // badgeColor={'#D18CE0'}
                mainText={'Negotiation'}
                descriptionText={
                  'Our priority is your interests and to get you the best price.'
                }
                icon={<AttachMoneyIcon sx={{ color: '#ffffff' }} />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default StaffPresentation
