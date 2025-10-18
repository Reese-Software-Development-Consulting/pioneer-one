//Simple Text Components

import React from 'react';
import { Typography } from '@mui/material';

const CustomText = ({ 
  textSize = '1rem', 
  textFont = 'Arial', 
  bold = false, 
  text = 'defaultText', 
  color = 'white',
  textAlign = 'center'
}) => {
  
  return (
    <Typography sx={{ fontSize: textSize, fontFamily: textFont, fontWeight: bold ? 'bold' : 'normal', textAlign: textAlign, color: color }} >
      {text}
    </Typography>
  );
};

export default CustomText;