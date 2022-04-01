import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      id,
      operation,
      type,
      price,
      city,
      livingArea,
      plot,
      bedroom,
      bathroom,
      description,
      img,
    } = req.body

    await mongoose.connect(
      connectionString,
      () => {
        console.log('connected')
      },
      (e) => console.error(e)
    )

    try {
      let property = await Property.updateOne(
        { _id: id },
        {
          $set: {
            operation,
            type,
            price,
            city,
            livingArea,
            plot,
            bedroom,
            bathroom,
            description,
            img,
          },
        }
      )

      return res.status(200).send(property)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}
