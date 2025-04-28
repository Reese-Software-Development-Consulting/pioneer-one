import React from 'react';
import { Box } from '@mui/material';
import LayoutTypeEnum from '../../enums/LayoutTypeEnum';

const CustomBodyComponent = ({
  layoutType = LayoutTypeEnum.VERTICAL,
  perRow = 3,
  BodyBackgroundColor = 'transparent',
  BodyBackgroundImage = '',
  children,
}) => {
  let layoutStyles = {};

  if (layoutType === LayoutTypeEnum.VERTICAL) {
    layoutStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    };
  } else if (layoutType === LayoutTypeEnum.HORIZONTAL) {
    layoutStyles = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    };
  } else if (layoutType === LayoutTypeEnum.GRID) {
    layoutStyles = {
      display: 'grid',
      gridTemplateColumns: `repeat(${perRow}, 1fr)`,
      gap: '2rem',
      justifyItems: 'center',
    };
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: BodyBackgroundColor,
        backgroundImage: BodyBackgroundImage ? `url(${BodyBackgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...layoutStyles,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBodyComponent;