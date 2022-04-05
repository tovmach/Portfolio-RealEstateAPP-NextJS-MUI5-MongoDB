import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'

const AdminLoginPage = () => {
  const loginHandler = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      user: 'admin',
      password: 'admin1234',
    })
    console.log(result)
  }

  return (
    <>
      <Button variant='contained' color='primary' onClick={loginHandler}>
        send
      </Button>
    </>
  )
}

export default AdminLoginPage
