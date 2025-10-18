//Slideshow Component that allows users to view multiple slides

import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ParagraphSection from '../text/ParagraphSection';

const Slideshow= ({
  slides = [],
  height = '500px',
  width = '100%',
  borderRadius = '0px',
  transitionMs = 600, 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const viewportRef = useRef(null);

  const clampIndex = (i) => {
    if (!slides.length) return 0;
    return (i + slides.length) % slides.length;
  };

  const scrollToIndex = (idx) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const slideWidth = vp.clientWidth;
    vp.scrollTo({ left: slideWidth * idx, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const next = clampIndex(currentSlide - 1);
    setCurrentSlide(next);
    scrollToIndex(next);
  };

  const handleNext = () => {
    const next = clampIndex(currentSlide + 1);
    setCurrentSlide(next);
    scrollToIndex(next);
  };

  useEffect(() => {
    const onResize = () => scrollToIndex(currentSlide);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentSlide]);

  const renderSlide = (slide, idx) => {
    const isElement = React.isValidElement(slide);
    const cfg = isElement ? {} : (slide || {});
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
      content,
    } = cfg;

    const bgImage = backgroundImage ? `url(${backgroundImage})` : 'none';

    return (
      <Box
        key={idx}
        sx={{
          flex: '0 0 100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor || 'transparent',
          backgroundImage: bgImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scrollSnapAlign: 'start',
        }}
      >
        {isElement ? (
          slide
        ) : content ? (
          content
        ) : (
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
        )}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        height,
        width,
        position: 'relative',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'rgba(255,255,255,0.6)' }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box
        ref={viewportRef}
        sx={{
          height: '100%',
          width: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth', 
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            transition: `transform ${transitionMs}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        >
          {slides.map(renderSlide)}
        </Box>
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'rgba(255,255,255,0.6)' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slideshow;
