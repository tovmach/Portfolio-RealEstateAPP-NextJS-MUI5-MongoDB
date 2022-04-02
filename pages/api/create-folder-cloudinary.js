import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import axios from 'axios'

const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

export default async function handler(req, res) {
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
