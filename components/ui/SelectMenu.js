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
    <Box sx={{ width: 160 }}>
      <FormControl fullWidth disabled={disabled} required={required}>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={label}
          onChange={handleChange}
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
