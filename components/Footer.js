import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
import { LinkedIn } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { WhatsApp, Telegram } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <Box mt={2}></Box>
      <Box
        sx={{ mt: 'auto', bgcolor: 'secondary.main', py: 1 }}
        color={'primary'}
        component={'footer'}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: '#ffffff',
                  a: {
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                  },
                }}
              >
                {'Copyright © '}
                <a href='https://tovmach.com' target='_blank' rel='noreferrer'>
                  Michael Tovmach
                </a>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={0}
              justifyContent={'center'}
              xs={12}
              md
            >
              <Grid item>
                <IconButton
                  href='https://twitter.com/MichaelTovmach'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <Facebook sx={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href='https://twitter.com/MichaelTovmach'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <LinkedIn sx={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href='https://twitter.com/MichaelTovmach'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <Twitter sx={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href='https://t.me/MichaelTovmach'
                  target='_blank'
                  aria-label='Telegram'
                >
                  <Telegram sx={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href='https://t.me/MichaelTovmach'
                  target='_blank'
                  aria-label='WhatsApp'
                >
                  <WhatsApp sx={{ color: 'white' }} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  color: 'white',
                  a: {
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  },
                  fontSize: 14,
                  mx: 1,
                }}
              >
                {'Phone: '}
                <a href='tel:+05890000111'>+58 900 001 111</a>
              </Box>
            </Grid>
            <Grid item sx={{ display: { xs: 'block', md: 'none' }, mx: 1 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: '#ffffff',
                  a: {
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold',
                  },
                }}
              >
                {'Copyright © '}
                <a href='https://tovmach.com' target='_blank' rel='noreferrer'>
                  Michael Tovmach
                </a>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Footer
