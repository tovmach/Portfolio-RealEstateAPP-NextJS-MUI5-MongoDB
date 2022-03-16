import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const connectionString = process.env.MONGO_URL

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const listOfIds = req.body.listOfIds

    // const documentIds = listOfIds.map(function (myId) {
    //   return ObjectId(myId)
    // })

    const connectionString = process.env.MONGO_URL

    await mongoose.connect(
      connectionString,
      () => {
        console.log('connected')
      },
      (e) => console.error(e)
    )

    let data = await Property.find({ _id: { $in: listOfIds } }).lean()

    data = JSON.parse(JSON.stringify(data))
    return res.status(200).send(data)
    // const { type, price, city, province, livingArea, bedroom, bathroom, img } =
    //   req.body

    // await mongoose.connect(
    //   connectionString,
    //   () => {
    //     console.log('connected')
    //   },
    //   (e) => console.error(e)
    // )

    // try {
    //   var property = new Property({
    //     type,
    //     price,
    //     city,
    //     province,
    //     livingArea,
    //     bedroom,
    //     bathroom,
    //     img,
    //   })
    //   var propertyCreated = await property.save()
    //   return res.status(200).send(propertyCreated)
    // } catch (error) {
    //   return res.status(500).send(error.message)
    // }
  } else {
    res.status(422).send('req_method_not_supported')
  }
}
