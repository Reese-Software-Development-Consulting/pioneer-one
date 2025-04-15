import React from 'react';
import { Card, CardMedia } from '@mui/material';

const CustomImage = ({
  src,
  width = '100%',
  height = '200px',
  alt = 'Image'
}) => {
  return (
    <Card
      sx={{
        width: width,
        maxWidth: '100%',
        margin: 'auto',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{
          width: '100%',
          height: height,
          objectFit: 'cover'
        }}
      />
    </Card>
  );
};

export default CustomImage;