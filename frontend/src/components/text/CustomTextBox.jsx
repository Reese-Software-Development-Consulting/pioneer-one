import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const CustomTextBox = ({ 
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
  onBlur 
}) => {
  
  return (
    <Box sx={{ width, marginBottom: '1rem' }}>
      {error && errorMessage && (
        <Typography sx={{ color: 'red', fontSize: '0.875rem', marginBottom: '4px', fontFamily: font, }} >
          {errorMessage}
        </Typography>
      )}
      <TextField value={value} onChange={onChange} onBlur={onBlur} fullWidth error={error} variant="outlined"
      //TODO: Need to replace InputProps because it will be removed in a coming release for mui
        InputProps={{
          sx: { fontSize, fontFamily: font, fontWeight: bold ? 'bold' : 'normal', color, height },
        }}
      />
    </Box>
  );
};

export default CustomTextBox;