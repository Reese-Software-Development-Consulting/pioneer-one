// Dropdown Component
import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';

const CustomDropdown = ({
  label = 'Select an option',
  options = [],
  fontSize = '1rem',
  font = 'Arial',
  bold = false,
  height = '40px',
  width = '100%',   // default 100% so parent controls sizing
  color = 'black',
  error = false,
  errorMessage = '',
  value,
  onChange,
  onBlur,
  sx = {},
}) => {
  return (
    <Box sx={{ width, ...sx, boxSizing: 'border-box' }}>
      <FormControl
        fullWidth
        error={error}
        sx={{ width: '100%' }}
      >
        <InputLabel
          sx={{
            fontFamily: font,
            fontWeight: bold ? 'bold' : 'normal',
            fontSize,
            color,
          }}
        >
          {label}
        </InputLabel>

        <Select
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          fullWidth
          sx={{
            fontSize,
            fontFamily: font,
            fontWeight: bold ? 'bold' : 'normal',
            color,
            '& .MuiSelect-select': {
              height,
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        {error && errorMessage && (
          <FormHelperText>{errorMessage}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomDropdown;