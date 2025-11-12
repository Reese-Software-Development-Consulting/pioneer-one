import { Card, CardContent, Box } from '@mui/material';
import CustomImage from '../images/CustomImage';
import CustomText from '../text/CustomText';
import CustomHyperLinkButton from '../buttons/CustomButton';
import ImagePositionEnum from '../../enums/PositionEnum';

const BodyCard = ({
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
  titleTextSpacing = '1rem',

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
  // ------------------------------
  // COMPONENTS
  // ------------------------------

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

  // ------------------------------
  // LAYOUT HANDLING
  // ------------------------------

  const verticalLayout = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {imageComponent}
      {titleComponent}
      {textComponent}
      {buttonComponent}
    </Box>
  );

  const horizontalLayout = (reverse = false) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        gap: 3,
        alignItems: 'center',
        justifyContent: 'center', // ✅ centers horizontally in the card
        width: '100%',            // ✅ ensures container spans full card width
        boxSizing: 'border-box',
      }}
    >
      {/* IMAGE COLUMN */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '0 0 40%' },
          maxWidth: { xs: '100%', md: '40%' },
          minWidth: 0,
        }}
      >
        {imageComponent}
      </Box>

      {/* CONTENT COLUMN */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 60%' },
          maxWidth: { xs: '100%', md: '60%' },
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {titleComponent}
        {textComponent}
        {buttonComponent}
      </Box>
    </Box>
  );

  let contentLayout;

  switch (ImagePosition) {
    case ImagePositionEnum.LEFT:
      contentLayout = horizontalLayout(false);
      break;
    case ImagePositionEnum.RIGHT:
      contentLayout = horizontalLayout(true);
      break;
    default:
      contentLayout = verticalLayout;
  }

  // ------------------------------
  // RETURN
  // ------------------------------

  return (
    <Card
      sx={{
        width: CardWidth,
        height: CardHeight,
        background: CardBackground,
        padding: 3,
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ padding: 0 }}>{contentLayout}</CardContent>
    </Card>
  );
};

export default BodyCard;