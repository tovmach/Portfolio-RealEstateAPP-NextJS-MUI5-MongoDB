import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import SelectMenu from './ui/SelectMenu'
import Button from '@mui/material/Button'
import Link from './Link'

const PropertySearchBar = () => {
  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [maxList, setMaxList] = useState([])
  const [minList, setMinList] = useState([])

  const operationList = [
    { text: 'Buy', value: 'buy' },
    { text: 'Rent', value: 'rent' },
  ]

  const locationList = [
    { text: 'Marbella', value: 'marbella' },
    { text: 'Estepona', value: 'estepona' },
  ]

  const typeList = [
    { text: 'Villa', value: 'villa' },
    { text: 'Apartment', value: 'apartment' },
  ]

  const buyPriceList = [
    { text: '25.000€', value: 25000 },
    { text: '50.000€', value: 50000 },
    { text: '100.000€', value: 100000 },
    { text: '150.000€', value: 150000 },
    { text: '200.000€', value: 200000 },
    { text: '250.000€', value: 250000 },
    { text: '300.000€', value: 300000 },
    { text: '500.000€', value: 500000 },
    { text: '750.000€', value: 750000 },
    { text: '1.000.000€', value: 1000000 },
  ]
  const rentPriceList = [
    { text: '250€', value: 250 },
    { text: '500€', value: 500 },
    { text: '1.000€', value: 1000 },
    { text: '1.500€', value: 1500 },
    { text: '2.000€', value: 2000 },
    { text: '2.500€', value: 2500 },
    { text: '3.000€', value: 3000 },
    { text: '5.000€', value: 5000 },
    { text: '7.500€', value: 7500 },
    { text: '10.000€', value: 10000 },
  ]

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        sx={{ bgcolor: 'secondary.main', p: 5, borderRadius: 2 }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item>
          <SelectMenu
            label='I want to'
            dataToSelect={operationList}
            handleChange={(event) => {
              setOperation(event.target.value)
              setMin('')
              setMax('')
              setMinList(
                event.target.value === 'buy' ? buyPriceList : rentPriceList
              )
            }}
            value={operation}
            required={true}
          />
        </Grid>{' '}
        <Grid item>
          <SelectMenu
            label='Type'
            dataToSelect={typeList}
            handleChange={(event) => setType(event.target.value)}
            value={type}
          />
        </Grid>
        <Grid item>
          <SelectMenu
            label='Location'
            dataToSelect={locationList}
            handleChange={(event) => setLocation(event.target.value)}
            value={location}
          />
        </Grid>
        <Grid item>
          <SelectMenu
            label='From'
            dataToSelect={minList}
            required={true}
            handleChange={(event) => {
              setMin(event.target.value)

              setMaxList(
                minList.filter((price) => price.value > event.target.value)
              )
            }}
            value={min}
            disabled={operation ? false : true}
          />
        </Grid>
        <Grid item>
          <SelectMenu
            label='To'
            dataToSelect={maxList}
            required={true}
            handleChange={(event) => setMax(event.target.value)}
            value={max}
            disabled={min ? false : true}
          />
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            href={`/properties${operation && '/' + operation}${
              type && '/' + type
            }${location && '/' + location}${min && '/' + min}${
              max && '/' + max
            }`}
            disabled={operation && min && max ? false : true}
          >
            Search Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PropertySearchBar
