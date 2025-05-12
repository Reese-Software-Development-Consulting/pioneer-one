import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import CustomImage from '../images/CustomImage';
import CustomText from '../text/CustomText';
import ImagePositionEnum from '../../enums/PositionEnum';

const CustomBodyCard = ({
    // Card styles
    CardHeight = 'auto',
    CardWidth = '100%',
    CardBackground = 'transparent',
  
    // Image props
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    imageBorderRadius,
    imageObjectFit,
    imageBoxShadow,
    imagePadding,
    imageElevation,
    imageMargin,
    imageCenter,
    imageMaxWidth,
    imageResponsive,
    imageUseAspectRatio,
    imageAspectRatio,
    imageOnClick,
    imageHoverEffect,
    imageLazyLoad,
    imageClassName,
    imageTitle,
    imageRole,
    imageAriaLabel,
    imageCaption,
  
    // Title text props
    titleText,
    titleTextSize,
    titleTextFont,
    titleBold,
    titleColor,
  
    // Paragraph text props
    textText,
    textTextSize,
    textTextFont,
    textBold,
    textColor,
  
    // Layout positioning
    ImagePosition = ImagePositionEnum.CENTER, // center | right | left
  }) => {
    const imageComponent = (
      <CustomImage
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        borderRadius={imageBorderRadius}
        objectFit={imageObjectFit}
        boxShadow={imageBoxShadow}
        padding={imagePadding}
        elevation={imageElevation}
        margin={imageMargin}
        center={imageCenter}
        maxWidth={imageMaxWidth}
        responsive={imageResponsive}
        useAspectRatio={imageUseAspectRatio}
        aspectRatio={imageAspectRatio}
        onClick={imageOnClick}
        hoverEffect={imageHoverEffect}
        lazyLoad={imageLazyLoad}
        className={imageClassName}
        title={imageTitle}
        role={imageRole}
        ariaLabel={imageAriaLabel}
        caption={imageCaption}
      />
    );
  
    const titleComponent = (
      <CustomText
        text={titleText}
        textSize={titleTextSize}
        textFont={titleTextFont}
        bold={titleBold}
        color={titleColor}
      />
    );
  
    const textComponent = (
      <CustomText
        text={textText}
        textSize={textTextSize}
        textFont={textTextFont}
        bold={textBold}
        color={textColor}
      />
    );
  
    let contentLayout;
  
    if (ImagePosition === ImagePositionEnum.CENTER) {
      contentLayout = (
        <>
          {imageComponent}
          {titleComponent}
          {textComponent}
        </>
      );
    } else if (ImagePosition === ImagePositionEnum.RIGHT) {
      contentLayout = (
        <Box sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              float: 'right',
              marginLeft: 2,
              marginBottom: 1,
              maxWidth: imageMaxWidth || '40%',
            }}
          >
            {imageComponent}
          </Box>
          <Box>{titleComponent}</Box>
          <Box>{textComponent}</Box>
          <Box sx={{ clear: 'both' }}></Box>
        </Box>
      );
    } else if (ImagePosition === ImagePositionEnum.LEFT) {
      contentLayout = (
        <Box sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              float: 'left',
              marginRight: 2,
              marginBottom: 1,
              maxWidth: imageMaxWidth || '40%',
            }}
          >
            {imageComponent}
          </Box>
          <Box>{titleComponent}</Box>
          <Box>{textComponent}</Box>
          <Box sx={{ clear: 'both' }}></Box>
        </Box>
      );
    }
  
    return (
      <Card
        sx={{
          width: CardWidth,
          height: CardHeight,
          background: CardBackground,
          padding: 2,
          borderRadius: '16px',
        }}
      >
        <CardContent>{contentLayout}</CardContent>
      </Card>
    );
  };
  
  export default CustomBodyCard;
  