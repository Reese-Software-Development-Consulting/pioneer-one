import React from 'react';
import { Card, CardMedia } from '@mui/material';

const SpinningImage = ({ src, width = '150px', height = '150px', alt = 'Spinning Image', speed = '4s' }) => {
  return (
    <Card sx={{ width: width, maxWidth: '100%', margin: 'auto', borderRadius: '16px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <CardMedia component="img" image={src} alt={alt} sx={{ width: width, height: height, objectFit: 'cover', animation: `spin ${speed} linear infinite`,
          '@keyframes spin': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }
        }} />
    </Card>
  );
};

export default SpinningImage;