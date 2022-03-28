import mongoose from 'mongoose'
import Property from '../../models/propertyModel'

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

const ITEMS_PER_PAGE = 6

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const page = req.query.page || 1

    const listOfIds = req.body.listOfIds

    await mongoose.connect(
      connectionString,
      () => {
        console.log('connected')
      },
      (e) => console.error(e)
    )

    // const count = await Property.estimatedDocumentCount({
    //   _id: { $in: listOfIds },
    // })
    const count = listOfIds.length

    const skip = (page - 1) * ITEMS_PER_PAGE

    const pageCount = count / ITEMS_PER_PAGE
    const pageCountRoundUp = Math.ceil(pageCount)

    const data = await Property.find({ _id: { $in: listOfIds } })
      .limit(ITEMS_PER_PAGE)
      .skip(skip)
      .lean()

    const items = JSON.parse(JSON.stringify(data))

    return res
      .status(200)
      .send({ pagination: { count, pageCountRoundUp }, items })
  } else {
    res.status(422).send('req_method_not_supported')
  }
}
