import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import BodySectionTypes from '../../../enums/BodySectionTypes';
import Position from '../../../enums/PositionEnum';

const BodySection = ({
  leftContent,
  rightContent,
  gap = '32px',
  padding = '32px',
  alignItems = 'flex-start',
  justifyContent = 'space-between',
  type = BodySectionTypes.DOUBLE,
  position = Position.LEFT, // new prop with default
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Margin logic based on PositionEnum
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

  if (type === BodySectionTypes.SINGLE) {
    return (
      <Box
        sx={{
          width: '100%',
          padding,
          display: 'flex',
          justifyContent: 'center',
          margin,
        }}
      >
        {leftContent}
      </Box>
    );
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
        margin,
      }}
    >
      <Box sx={{ flex: 1 }}>{leftContent}</Box>
      <Box sx={{ flex: 1 }}>{rightContent}</Box>
    </Box>
  );
};

export default BodySection;