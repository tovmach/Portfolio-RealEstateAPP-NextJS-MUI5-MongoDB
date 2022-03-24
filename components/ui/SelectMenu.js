import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectMenu({
  dataToSelect,
  label,
  handleChange,
  value,
  disabled,
  required,
  sx,
}) {
  return (
    <FormControl fullWidth disabled={disabled} required={required}>
      <InputLabel
        id='demo-simple-select-label'
        sx={{
          color: 'white',
          '&.Mui-focused.MuiFormLabel-root': { color: 'white' },
          '&.Mui-disabled': { color: 'rgb(255 255 255 / 38%)' },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label={label}
        onChange={handleChange}
        variant='outlined'
        sx={{
          ' & .MuiSvgIcon-root': {
            color: 'white',
          },
          ' &.Mui-disabled .MuiSvgIcon-root': {
            color: 'rgb(255 255 255 / 30%)',
          },

          color: 'white',

          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(255 255 255 / 100%)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(255 255 255 / 30%)',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(255 255 255 / 30%)',
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          ...sx,
        }}
      >
        {dataToSelect.map((item) => (
          <MenuItem value={item.value} key={item.text}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
