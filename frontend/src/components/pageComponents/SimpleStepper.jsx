import React from 'react';
import { Box, Typography } from '@mui/material';

const SimpleStepper = ({
  height = 'auto',
  width = '100%',
  backgroundColor = '#fff',
  color = '#d8a47f',
  elements = [],
}) => {
  return (
    <Box
      sx={{
        height,
        width,
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      {elements.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor,
            border: `5px solid ${color}`,
            boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
            padding: '40px 30px',
            textAlign: 'center',
            width: '250px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: item.textFont || 'Arial',
              fontSize: item.textSize || '1.25rem',
              color: item.textColor || '#333',
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SimpleStepper;