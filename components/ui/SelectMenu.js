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
}) {
  return (
    <Box
      sx={{
        width: 185,
      }}
    >
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
              color: 'rgb(255 255 255 / 38%)',
            },

            color: 'white',
            mr: 2,

            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgb(255 255 255 / 60%)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgb(255 255 255 / 38%)',
            },
            '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgb(255 255 255 / 38%)',
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          }}
        >
          {dataToSelect.map((item) => (
            <MenuItem value={item.value} key={item.text}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
