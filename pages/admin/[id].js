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
import CloudinaryMediaLibraryButton from '../../components/adminPageComponents/CloudinaryMediaLibraryButton'
import { Box } from '@mui/material'
import Link from '../../components/Link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button } from '@mui/material'
import Image from 'next/image'
import { getSession } from 'next-auth/react'

const PropertyEditPage = ({ data, id, cloudName, apiKey }) => {
  const router = useRouter()

  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [plot, setPlot] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  const [updatedSuccess, setUpdatedSuccess] = useState(false)

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
    if (data.img) {
      setImg(data.img)
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
        img,
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
        setImg('')
        setUpdatedSuccess(true)
        // router.push('/admin')
      })
  }

  return (
    <>
      <Container maxWidth='sm'>
        <Button
          sx={{ mb: 2 }}
          variant='contained'
          color='primary'
          component={Link}
          href={'/admin'}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </Container>
      {updatedSuccess ? (
        <>
          <Image
            src={'/webMedia/success.svg'}
            width={500}
            height={320}
            objectFit='contain' // or objectFit="cover"
            alt={'updated successfully'}
          />
          <Box sx={{ textAlign: 'center', color: '#58585D', mt: 2 }}>
            Property updated successfully!
          </Box>
        </>
      ) : (
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
          img={img}
          setImg={setImg}
          onSubmitHandler={onSubmitHandler}
        />
      )}

      <Box sx={{ mb: 2 }}></Box>

      <CloudinaryMediaLibraryButton
        id={id}
        cloudName={cloudName}
        apiKey={apiKey}
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
  const session = await getSession({ req: ctx.req })

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  const id = ctx.params.id
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY

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
      id,
      cloudName,
      apiKey,
    },
  }
}
