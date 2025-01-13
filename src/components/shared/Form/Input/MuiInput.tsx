import { InputAdornment, TextField } from '@mui/material'
import React, { forwardRef } from 'react'

interface MuiInputProps {
  label: string
  value: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

const MuiInput = forwardRef<HTMLInputElement, MuiInputProps>(
  ({ label, value, onChange, color, startAdornment, endAdornment }, ref) => {
    return (
      <TextField
        ref={ref}
        label={label}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
        variant="outlined"
        color={color}
        size="small"
        slotProps={{
            input: {
                startAdornment: startAdornment && (
                    <InputAdornment position="start">{startAdornment}</InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position="end">{endAdornment}</InputAdornment>
                )
            }
        }}


      />
    )
  },
)

export { MuiInput }

// Usage example
// <MuiInput
//   label="Enter Text"
//   value=""
//   onChange={(newValue) => console.log(newValue)}
//   color="primary"
//   startAdornment={<CancelRounded />}
//   endAdornment={<CancelRounded />}
// />

