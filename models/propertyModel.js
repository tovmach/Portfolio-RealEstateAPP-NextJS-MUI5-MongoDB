import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
  variant: { type: String, required: true },
  price: Number,
})

const Property =
  mongoose.models.Property || mongoose.model('Property', propertySchema)

export default Property
