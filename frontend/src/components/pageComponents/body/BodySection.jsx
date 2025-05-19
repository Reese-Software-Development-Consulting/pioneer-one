import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import BodySectionTypes from '../../../enums/BodySectionTypes'; // adjust path as needed

const BodySection = ({
  leftContent,
  rightContent,
  gap = '32px',
  padding = '32px',
  alignItems = 'flex-start',
  justifyContent = 'space-between',
  type = BodySectionTypes.DOUBLE, // default behavior
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (type === BodySectionTypes.SINGLE) {
    return (
      <Box
        sx={{
          width: '100%',
          padding,
          display: 'flex',
          justifyContent: 'center'
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
      }}
    >
      <Box sx={{ flex: 1 }}>{leftContent}</Box>
      <Box sx={{ flex: 1 }}>{rightContent}</Box>
    </Box>
  );
};

export default BodySection;