import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'

const AdminLoginPage = () => {
  const router = useRouter()

  const loginHandler = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      user: 'admin',
      password: 'admin1234',
    })
    if (!result.error) {
      router.replace('/admin')
    }
  }

  return (
    <>
      <Button variant='contained' color='primary' onClick={loginHandler}>
        Login
      </Button>
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
