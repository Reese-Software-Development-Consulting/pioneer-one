import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ 
    color = 'primary', 
    rounded = false, 
    square = false, 
    text = 'Click Me', 
    onClick = () => {} 
}) => {

  const borderRadius = rounded ? '50px' : square ? '0px' : '8px';

  return (
    <Button variant="contained" onClick={onClick}
      sx={{ backgroundColor: color, borderRadius: borderRadius, padding: '12px 24px', fontSize: '1rem', width: '100%', maxWidth: '90vw', textTransform: 'none',
        '@media (min-width: 600px)': { fontSize: '1.1rem', maxWidth: '300px' }
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;