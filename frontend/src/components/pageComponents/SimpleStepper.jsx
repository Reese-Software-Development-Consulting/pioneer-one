import React from 'react';
import { Box, Typography } from '@mui/material';

const SimpleStepper = ({
  height = 'auto',
  width = '100%',
  backgroundColor = '#fff',
  color = '#d8a47f',
  elements = [],
  boxSize = 200, // New parameter: controls size of square box
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
        padding: '80px 20px', // ✅ increased vertical padding
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          overflowX: 'auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            minWidth: 'fit-content',
          }}
        >
          {elements.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor,
                border: `5px solid ${color}`,
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
                padding: '20px',
                textAlign: 'center',
                width: `${boxSize}px`,
                height: `${boxSize}px`, // Ensures square shape with boxSize
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
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
      </Box>
    </Box>
  );
};

export default SimpleStepper;
