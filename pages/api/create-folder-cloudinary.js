import axios from 'axios'
import { getSession } from 'next-auth/react'

const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

export default async function handler(req, res) {
  const session = await getSession({ req: req })
  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' })
    return
  }

  if (req.method === 'GET') {
    const folderName = req.query.id

    try {
      const data = await axios.post(
        `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/folders/property/${folderName}`
      )
      res.status(200).json({ message: 'folder created' })
    } catch (error) {
      return res.status(error.status || 500).end(error.message)
    }
  }
}
