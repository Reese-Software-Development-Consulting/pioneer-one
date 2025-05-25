import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Position from '../../../enums/PositionEnum';

const HorizontalBodySection = ({
  children,
  gap = '32px',
  padding = '32px',
  alignItems = 'flex-start',
  justifyContent = 'space-between',
  width = '100%',
  height = 'auto',
  position = Position.CENTER,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Determine margin based on position enum
  let margin;
  switch (position) {
    case Position.CENTER:
      margin = '0 auto';
      break;
    case Position.RIGHT:
      margin = '0 0 0 auto';
      break;
    case Position.LEFT:
    default:
      margin = '0 auto 0 0';
      break;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems,
        justifyContent,
        gap,
        padding,
        width,
        height,
        flexWrap: 'wrap',
        margin,
      }}
    >
      {children}
    </Box>
  );
};

export default HorizontalBodySection;
