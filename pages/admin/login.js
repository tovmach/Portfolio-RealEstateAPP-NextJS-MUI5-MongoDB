import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import Container from '@mui/material/Container'
import { Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const AdminLoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const loginHandler = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      user,
      password,
    })
    if (!result.error) {
      router.replace('/admin')
    }
  }

  return (
    <>
      <Container maxWidth='sm'>
        <Paper sx={{ p: 2 }}>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              mb: 1,
            }}
          >
            Login
          </Typography>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            id='User'
            label='User'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            type={'password'}
            sx={{ mb: 2 }}
            fullWidth
            id='Password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={loginHandler}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </>
  )
}

export default AdminLoginPage

export const getServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req })

  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}
