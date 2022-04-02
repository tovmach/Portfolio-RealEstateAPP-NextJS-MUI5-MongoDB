import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import PropertyForm from '../../../components/adminPageComponents/PropertyForm'

const NewProperty = () => {
  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [livingArea, setLivingArea] = useState('')
  const [plot, setPlot] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const onSubmitHandler = () => {
    axios
      .post('/api/add-property', {
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
        console.log(response.data._id)
        setOperation('')
        setType('')
        setPrice('')
        setCity('')
        setLivingArea('')
        setPlot('')
        setBedroom('')
        setBathroom('')
        setDescription('')

        axios
          .get(`/api/create-folder-cloudinary?id=${response.data._id}`)
          .then((res) => {
            console.log('creaded folder')
            router.push(`/admin/new-property/${response.data._id}`)
            console.log(res)
          })
          .catch((err) => console.log(err))
      })
  }

  return (
    <>
      <Typography
        component={'h1'}
        color='primary'
        textAlign={'center'}
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
        mb={1}
      >
        Add new Property
      </Typography>
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
    </>
  )
}

export default NewProperty
