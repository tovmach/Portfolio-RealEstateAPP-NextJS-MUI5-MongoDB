import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { type, price, city, province, livingArea, bedroom, bathroom, img } =
      req.body

    await mongoose.connect(
      connectionString,
      () => {
        console.log('connected')
      },
      (e) => console.error(e)
    )

    try {
      var property = new Property({
        type,
        price,
        city,
        province,
        livingArea,
        bedroom,
        bathroom,
        img,
      })
      var propertyCreated = await property.save()
      return res.status(200).send(propertyCreated)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}

// import { MongoClient } from 'mongodb'

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const variant = req.body.variant
//     const price = req.body.price

//     // if (!variant) {
//     //   res.status(422).json({ message: 'Invalid email address.' })
//     // }
//     const connectionString = process.env.MONGO_URL

//     const client = await MongoClient.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     const db = client.db()
//     await db.collection('propertys').insertOne({ variant, price })
//     client.close()

//     res.status(201).json({ variant, price })
//   }
// }
