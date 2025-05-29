import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ 
  color = 'primary', 
  rounded = false, 
  square = false, 
  text = 'Click Me', 
  height = '40px',
  width = '300px',
  onClick = () => {} 
}) => {

  const borderRadius = rounded ? '50px' : square ? '0px' : '8px';

  return (
    <Button variant="contained" onClick={onClick}
      sx={{ 
        height: height, 
        width: width, 
        backgroundColor: color, 
        borderRadius: borderRadius, 
        padding: '12px 24px', 
        fontSize: '1rem', 
        maxWidth: '90vw', 
        textTransform: 'none',
        '@media (min-width: 600px)': { fontSize: '1.1rem', maxWidth: '300px' }
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;