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
  width = '300px',
  color = 'black',
  error = false,
  errorMessage = '',
  value,
  onChange,
  onBlur,
}) => {
  return (
    <Box>
      <FormControl
        fullWidth
        error={error}
        sx={{
          width,
        }}
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
