import React from 'react'
import mongoose from 'mongoose'
import Property from '../../models/propertyModel'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import DeletePropertyButton from '../../components/adminPageComponents/DeletePropertyButton'
import PropertyForm from '../../components/adminPageComponents/PropertyForm'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

const PropertyEditPage = ({ data }) => {
  const router = useRouter()

  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [plot, setPlot] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (data.operation) {
      setOperation(data.operation)
    }
    if (data.type) {
      setType(data.type)
    }
    if (data.price) {
      setPrice(data.price)
    }
    if (data.city) {
      setCity(data.city)
    }
    if (data.livingArea) {
      setLivingArea(data.livingArea)
    }
    if (data.plot) {
      setPlot(data.plot)
    }
    if (data.bedroom) {
      setBedroom(data.bedroom)
    }
    if (data.bathroom) {
      setBathroom(data.bathroom)
    }
    if (data.description) {
      setDescription(data.description)
    }
  }, [])

  const onSubmitHandler = () => {
    axios
      .post('/api/update-property', {
        id: data._id,
        operation,
        type,
        price,
        city,
        livingArea,
        plot,
        bedroom,
        bathroom,
        description,
        img: '/villa.jpg',
      })
      .then((response) => {
        setOperation('')
        setType('')
        setPrice('')
        setCity('')
        setLivingArea('')
        setPlot('')
        setBedroom('')
        setBathroom('')
        setDescription('')
        router.push('/admin')
      })
  }

  return (
    <>
      <PropertyForm
        operation={operation}
        setOperation={setOperation}
        type={type}
        setType={setType}
        price={price}
        setPrice={setPrice}
        city={city}
        setCity={setCity}
        livingArea={livingArea}
        setLivingArea={setLivingArea}
        plot={plot}
        setPlot={setPlot}
        bedroom={bedroom}
        setBedroom={setBedroom}
        bathroom={bathroom}
        setBathroom={setBathroom}
        description={description}
        setDescription={setDescription}
        onSubmitHandler={onSubmitHandler}
      />
      <Container maxWidth='sm'>
        <Grid container alignItems={'center'} mt={2}>
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
