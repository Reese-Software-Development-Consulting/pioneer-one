import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ParagraphSection from '../text/ParagraphSection';

const Stepper = ({
  slides = [],
  height = '500px',
  width = '100%',
  borderRadius = '0px',
  title = 'Stepper',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const {
    backgroundColor,
    backgroundImage,
    height: paragraphHeight,
    width: paragraphWidth,
    titleText,
    titleTextFont,
    titleTextSize,
    titleTextColor,
    titleTextBold,
    dividerColor,
    dividerWidth,
    paragraphText,
    paragraphTextFont,
    paragraphTextSize,
    paragraphTextColor,
    buttonText,
    buttonColor,
    buttonTextColor,
    buttonTextFont,
    buttonTextSize,
    buttonHeight,
    buttonWidth,
    buttonHyperlink,
    titlePadding,
    paragraphPadding,
    buttonMarginTop,
    justifyContent,
    showButton,
  } = slides[currentSlide] || {};

  return (
    <Box
      sx={{
        height,
        width,
        position: 'relative',
        backgroundColor: backgroundColor || '#f0f0f0',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <ParagraphSection
        height={paragraphHeight}
        width={paragraphWidth}
        backgroundColor={backgroundColor}
        titleText={titleText}
        titleTextFont={titleTextFont}
        titleTextSize={titleTextSize}
        titleTextColor={titleTextColor}
        titleTextBold={titleTextBold}
        dividerColor={dividerColor}
        dividerWidth={dividerWidth}
        paragraphText={paragraphText}
        paragraphTextFont={paragraphTextFont}
        paragraphTextSize={paragraphTextSize}
        paragraphTextColor={paragraphTextColor}
        buttonText={buttonText}
        buttonColor={buttonColor}
        buttonTextColor={buttonTextColor}
        buttonTextFont={buttonTextFont}
        buttonTextSize={buttonTextSize}
        buttonHeight={buttonHeight}
        buttonWidth={buttonWidth}
        buttonHyperlink={buttonHyperlink}
        titlePadding={titlePadding}
        paragraphPadding={paragraphPadding}
        buttonMarginTop={buttonMarginTop}
        justifyContent={justifyContent}
        showButton={showButton}
      />

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Stepper;