import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import CustomImage from '../images/Image';
import CustomText from '../text/Text';
import CustomHyperLinkButton from '../buttons/HyperLinkButton';
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
  titleTextSpacing = '1rem', // 🆕 spacing between title and paragraph

  // Paragraph text props
  textText,
  textTextSize,
  textTextFont,
  textBold,
  textColor,

  // Button props
  buttonText,
  buttonColor,
  buttonRounded,
  buttonSquare,
  buttonHyperlink,
  buttonHeight,
  buttonWidth,

  // Layout positioning
  ImagePosition = ImagePositionEnum.CENTER,
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
    <Box sx={{ marginTop: titleTextSpacing }}>
      <CustomText
        text={textText}
        textSize={textTextSize}
        textFont={textTextFont}
        bold={textBold}
        color={textColor}
      />
    </Box>
  );

  const buttonComponent = buttonText ? (
    <Box sx={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
      <CustomHyperLinkButton
        text={buttonText}
        color={buttonColor}
        rounded={buttonRounded}
        square={buttonSquare}
        hyperlink={buttonHyperlink}
        height={buttonHeight}
        width={buttonWidth}
      />
    </Box>
  ) : null;

  let contentLayout;

  if (ImagePosition === ImagePositionEnum.CENTER) {
    contentLayout = (
      <>
        {imageComponent}
        {titleComponent}
        {textComponent}
        {buttonComponent}
      </>
    );
 // LEFT image layout
} else if (ImagePosition === ImagePositionEnum.LEFT) {
  contentLayout = (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
      <Box sx={{ flex: '0 0 auto', maxWidth: imageMaxWidth || '40%' }}>
        {imageComponent}
      </Box>
      <Box sx={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column' }}>
        {titleComponent}
        {textComponent}
        {buttonComponent}
      </Box>
    </Box>
  );
}

// RIGHT image layout
else if (ImagePosition === ImagePositionEnum.RIGHT) {
  contentLayout = (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 2 }}>
      <Box sx={{ flex: '0 0 auto', maxWidth: imageMaxWidth || '40%' }}>
        {imageComponent}
      </Box>
      <Box sx={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column' }}>
        {titleComponent}
        {textComponent}
        {buttonComponent}
      </Box>
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
