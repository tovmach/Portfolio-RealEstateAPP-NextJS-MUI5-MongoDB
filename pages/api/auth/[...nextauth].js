import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/userModel'
import mongoose from 'mongoose'
import { verifyPassword } from '../../../utils/hash'

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

// credentials in users colection
export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await mongoose.connect(
          connectionString,
          () => {
            console.log('connected')
          },
          (e) => console.error(e)
        )

        const user = await User.findOne({ user: 'admin' }).lean()

        if (!user) {
          throw new Error('No user found!')
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error('Could not log you in!')
        }

        return { user: user.user }
      },
    }),
  ],
})
