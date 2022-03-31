import React from 'react'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { red } from '@mui/material/colors'
import DeletePropertyButton from '../../components/adminPageComponents/DeletePropertyButton'

const PropertyEditPage = ({ data }) => {
  return (
    <>
      <Container maxWidth='sm'>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs>
            <DeletePropertyButton id={data._id} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default PropertyEditPage

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id

  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.s3o9t.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`

  await mongoose.connect(
    connectionString,
    () => {},
    (e) => console.error(e)
  )

  let data = await Property.findOne({
    _id: id,
  }).lean()

  data = JSON.parse(JSON.stringify(data))

  return {
    props: {
      data,
    },
  }
}
