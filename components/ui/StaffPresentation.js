import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GppGoodIcon from '@mui/icons-material/GppGood'
import { Box } from '@mui/material'

const BoxWhitIcon = () => {
  return (
    <Box sx={{ width: 250, bgcolor: 'white', borderRadius: 3, p: 2 }}>
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
              bgcolor: '#7AA7FC',
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
              <GppGoodIcon sx={{ color: '#ffffff' }} />
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            Confortable
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            John Smith was an American actor was an American actor
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

const StaffPresentation = () => {
  return (
    <>
      <Grid container spacing={1} direction={'column'}>
        <Grid item container spacing={0}>
          <Grid item>
            <GppGoodIcon sx={{ color: '#7AA7FC' }} />
          </Grid>
          <Grid item>
            <Typography sx={{ color: '#7AA7FC' }}>Our Advantage</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: '2rem' }}>John Smith</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.75)', maxWidth: 450 }}>
            John Smith was an American actor whose career primarily focused on
            westerns.
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item container spacing={2}>
            <Grid item>
              <BoxWhitIcon />
            </Grid>
            <Grid item>
              <BoxWhitIcon />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item>
              <BoxWhitIcon />
            </Grid>
            <Grid item>
              <BoxWhitIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default StaffPresentation
