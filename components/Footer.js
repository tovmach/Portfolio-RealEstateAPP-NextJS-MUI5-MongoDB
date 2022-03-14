import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ mt: 'auto' }} color={'primary'}>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={0}
          sx={{ mb: 1, mt: { xs: 5 } }}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Grid item>
            <Typography
              sx={{
                a: { textDecoration: 'none', color: 'primary.main' },
                fontSize: 15,
              }}
            >
              {'Copyright © '}
              <a
                href='https://github.com/tovmach'
                target='_blank'
                rel='noreferrer'
              >
                Michael Tovmach
              </a>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
