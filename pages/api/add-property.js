import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const connectionString = process.env.MONGO_URL

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { variant, price } = req.body

    await mongoose.connect(
      connectionString,
      () => {
        console.log('connected')
      },
      (e) => console.error(e)
    )

    try {
      var property = new Property({
        variant,
        price,
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
