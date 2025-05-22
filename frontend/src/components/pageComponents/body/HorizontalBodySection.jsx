import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const HorizontalBodySection = ({
  children,
  gap = '32px',
  padding = '32px',
  alignItems = 'flex-start',
  justifyContent = 'space-between',
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems,
        justifyContent,
        gap,
        padding,
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </Box>
  );
};

export default HorizontalBodySection;