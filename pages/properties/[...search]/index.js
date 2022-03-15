import React from 'react'
import mongoose from 'mongoose'
import Property from '../../../models/propertyModel'
import PropertyCardList from '../../../components/Card/PropertyCardList'
import Container from '@mui/material/Container'

const PropertySearchPage = ({ data }) => {
  return (
    <>
      <Container maxWidth='lg'>
        <PropertyCardList data={data} />
      </Container>
    </>
  )
}

export default PropertySearchPage

export async function getServerSideProps(context) {
  // console.log(context)
  // const { params } = context
  // const filterData = params.search

  const connectionString = process.env.MONGO_URL

  await mongoose.connect(
    connectionString,
    () => {
      console.log('connected')
    },
    (e) => console.error(e)
  )

  let date = await Property.find({
    price: { $gte: 250000, $lte: 4500000 },
  }).lean()
  date = JSON.parse(JSON.stringify(date))

  console.log(date)

  //const datajson = JSON.stringify(date)

  return {
    props: {
      data: date,
    },
  }
}
// export async function getServerSideProps(context) {
//   // console.log(context)
//   // const { params } = context
//   // const filterData = params.search

//   const connectionString = process.env.MONGO_URL

//   await mongoose.connect(
//     connectionString,
//     () => {
//       console.log('connected')
//     },
//     (e) => console.error(e)
//   )

//   const date = await Property.findOne({
//     price: { $gte: 250000, $lte: 450000 },
//   }).lean()
//   date._id = date._id.toString()

//   console.log(date)

//   //const datajson = JSON.stringify(date)

//   return {
//     props: {
//       data: date,
//     },
//   }
// }
