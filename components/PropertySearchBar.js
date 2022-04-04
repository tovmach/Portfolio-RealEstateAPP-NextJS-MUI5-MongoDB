import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import SelectMenu from './ui/SelectMenu'
import Button from '@mui/material/Button'
import Link from './Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import {
  locationList,
  operationList,
  typeList,
  buyPriceList,
  rentPriceList,
} from '../utils/selectMenuDataArrays'

const PropertySearchBar = ({
  operationFromQuery,
  typeFromQuery,
  locationFromQuery,
  minFromQuery,
  maxFromQuery,
}) => {
  const [loading, setLoading] = useState(false)

  const [operation, setOperation] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [maxList, setMaxList] = useState([])
  const [minList, setMinList] = useState([])

  const matchesSM = useMediaQuery('(max-width:600px)')

  useEffect(() => {
    setLoading(false)
    if (operationFromQuery && operation === '') {
      setOperation(operationFromQuery)
      setMinList(operationFromQuery === 'buy' ? buyPriceList : rentPriceList)
    }
    if (typeFromQuery && type === '') {
      setType(typeFromQuery)
    }

    if (locationFromQuery && location === '') {
      setLocation(locationFromQuery)
    }
    if (minFromQuery && maxList.length === 0) {
      setMin(+minFromQuery)
      setMaxList(minList.filter((price) => price.value > +minFromQuery))
    }
    if (
      maxFromQuery &&
      max === '' &&
      maxList.length > 0 &&
      operationFromQuery === operation &&
      min !== '' &&
      +minFromQuery === min
    ) {
      setMax(+maxFromQuery)
    }
  }, [
    operationFromQuery,
    typeFromQuery,
    locationFromQuery,
    minFromQuery,
    maxFromQuery,
    minList,
    maxList,
    operation,
    type,
    location,
    max,
    min,
  ])

  return (
    <Container maxWidth='lg' disableGutters={matchesSM}>
      <Grid
        container
        sx={{
          bgcolor: 'secondary.main',
          p: '25px',
          borderRadius: { xs: 0, sm: 2 },
          '.MuiFormControl-root': {
            mb: '10px',
          },
        }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12} md>
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
            sx={{ mr: { md: '5px' } }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md>
          <SelectMenu
            label='Type'
            dataToSelect={typeList}
            handleChange={(event) => setType(event.target.value)}
            value={type}
            sx={{ mr: { sm: '5px' }, ml: { md: '5px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <SelectMenu
            label='Location'
            dataToSelect={locationList}
            handleChange={(event) => setLocation(event.target.value)}
            value={location}
            sx={{ ml: { sm: '5px' }, mr: { md: '5px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <SelectMenu
            label='From'
            dataToSelect={minList.slice(0, -1)}
            required={true}
            handleChange={(event) => {
              setMin(event.target.value)

              setMaxList(
                minList.filter((price) => price.value > event.target.value)
              )

              if (event.target.value >= max && max !== '') {
                console.log('runing')
                setMax(500000000)
              }

              if (event.target.value == minList[minList.length - 2].value) {
                console.log('runing')
                setMax(500000000)
              }
            }}
            value={min}
            disabled={operation ? false : true}
            sx={{ mr: { sm: '5px' }, ml: { md: '5px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <SelectMenu
            label='To'
            dataToSelect={maxList}
            required={true}
            handleChange={(event) => setMax(event.target.value)}
            value={max}
            disabled={min ? false : true}
            sx={{ ml: { sm: '5px' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='outlined'
            color='primary'
            component={Link}
            href={`/properties/search?${
              operation && 'operation=' + operation + '&'
            }${type && 'type=' + type + '&'}${
              location && 'location=' + location + '&'
            }${min && 'min=' + min + '&'}${max && 'max=' + max}`}
            sx={{
              width: '100%',
              border: 'solid 1px #ffffff',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: 'rgb(255 255 255 / 10%)',
                borderColor: '#ffffff',
                color: 'white',
              },
              '&.Mui-disabled': {
                color: 'rgb(255 255 255 / 30%)',
                border: '1px solid rgb(255 255 255 / 30%)',
              },
              fontSize: 14,
            }}
            disabled={operation && min && max ? false : true}
            onClick={() => {
              if (+minFromQuery !== min || +maxFromQuery !== max) {
                setLoading(true)
              }
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Search Now'
            )}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PropertySearchBar
