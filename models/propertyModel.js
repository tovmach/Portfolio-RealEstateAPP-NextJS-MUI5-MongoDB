import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
  operation: String,
  type: String,
  price: Number,
  city: String,
  livingArea: Number,
  bedroom: Number,
  bathroom: Number,
  plot: Number,
  description: String,
  img: String,
})

const Property =
  mongoose.models.Property || mongoose.model('Property', propertySchema)

export default Property
