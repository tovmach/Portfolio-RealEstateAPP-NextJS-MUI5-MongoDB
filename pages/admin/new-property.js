import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { TextField, Button } from '@mui/material'
import SelectMenu from '../../components/ui/SelectMenu'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import { amber } from '@mui/material/colors'
import SendIcon from '@mui/icons-material/Send'
import { useRouter } from 'next/router'
import PropertyForm from '../../components/adminPageComponents/PropertyForm'

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
