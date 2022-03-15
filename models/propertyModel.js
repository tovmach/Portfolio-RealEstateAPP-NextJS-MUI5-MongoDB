import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
  type: String,
  price: Number,
  city: String,
  province: String,
  livingArea: Number,
  bedroom: Number,
  bathroom: Number,
  img: String,
})

const Property =
  mongoose.models.Property || mongoose.model('Property', propertySchema)

export default Property
