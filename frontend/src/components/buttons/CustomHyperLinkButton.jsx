import React from 'react';
import Button from '@mui/material/Button';

const CustomHyperLinkButton = ({ 
  color = 'primary', 
  rounded = false, 
  square = false, 
  hyperlink = '#', 
  height = '40px',
  width = '300px',
  text = 'Click Me' 
}) => {
  const borderRadius = rounded ? '50px' : square ? '0px' : '8px';

  const handleClick = () => {
    window.location.href = hyperlink;
  };

  return (
    <Button variant="contained" onClick={handleClick}
      sx={{ height: height, width: width, backgroundColor: color, borderRadius: borderRadius, padding: '12px 24px',
        fontSize: '1rem', width: '100%', maxWidth: '90vw', textTransform: 'none',
        '@media (min-width: 600px)': { fontSize: '1.1rem', maxWidth: '300px' }
      }}
    >
      {text}
    </Button>
  );
};

export default CustomHyperLinkButton;