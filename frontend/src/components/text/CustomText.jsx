import React from 'react';
import { Typography } from '@mui/material';

const CustomText = ({ textSize = '1rem', textFont = 'Arial', bold = false, text = 'defaultText', color = 'white' }) => {
  return (
    <Typography sx={{ fontSize: textSize, fontFamily: textFont, fontWeight: bold ? 'bold' : 'normal', textAlign: 'center', color: color }} >
      {text}
    </Typography>
  );
};

export default CustomText;