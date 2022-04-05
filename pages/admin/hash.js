import React from 'react'
import { hashPassword } from '../../utils/hash'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
const HashPage = () => {
  const [password, setPassword] = useState('')
  const [hasedPassword, setHasedPassword] = useState('')

  const hasHandler = () => {
    hashPassword(password).then((result) => setHasedPassword(result))
  }

  return (
    <>
      <Container maxWidth='md'>
        <Box
          sx={{
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            color: 'primary.main',
            textAlign: 'center',
          }}
        >
          Hash a password for the admin user
        </Box>
        <Box sx={{ textAlign: 'center' }}>{hasedPassword}</Box>
        <TextField
          sx={{ my: 2 }}
          fullWidth
          id='password'
          label='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={hasHandler}
        >
          Hash
        </Button>
      </Container>
    </>
  )
}

export default HashPage
7
