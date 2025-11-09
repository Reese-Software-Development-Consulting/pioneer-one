import { Box, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // <-- import Link for client-side routing

const justifyMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const ParagraphSection = ({
  height = 'auto',
  width = 'auto',
  backgroundColor = '#fff',
  titleText = '',
  titleTextFont = 'Arial',
  titleTextSize = '1.75rem',
  titleTextColor = '#000',
  titleTextBold = true,
  dividerColor = '#b72b2b',
  dividerWidth = '100px',
  paragraphText = '',
  paragraphTextFont = 'Arial',
  paragraphTextSize = '1rem',
  paragraphTextColor = '#333',
  buttonText = 'SEE OUR WORK',
  buttonColor = '#b72b2b',
  buttonTextColor = '#fff',
  buttonTextFont = 'Arial',
  buttonTextSize = '0.875rem',
  buttonHeight = '40px',
  buttonWidth = '160px',
  buttonHyperlink = '#',
  titlePadding = '16px 0',
  paragraphPadding = '16px 0',
  buttonMarginTop = '24px',
  justifyContent = 'left',
  showButton = true,
}) => {
  const alignment = justifyMap[justifyContent] || 'flex-start';

  return (
    <Box
      sx={{
        height,
        width,
        backgroundColor,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: alignment,
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontFamily: titleTextFont,
          fontSize: titleTextSize,
          color: titleTextColor,
          fontWeight: titleTextBold ? 'bold' : 'normal',
          padding: titlePadding,
          textAlign: justifyContent,
          whiteSpace: 'normal',
          wordBreak: 'break-word',
        }}
      >
        {titleText}
      </Typography>

      {/* Divider */}
      <Divider
        sx={{
          width: dividerWidth,
          borderBottomWidth: '4px',
          borderColor: dividerColor,
          marginBottom: '16px',
          alignSelf: alignment,
        }}
      />

      {/* Paragraph */}
      <Typography
        sx={{
          fontFamily: paragraphTextFont,
          fontSize: paragraphTextSize,
          color: paragraphTextColor,
          padding: paragraphPadding,
          textAlign: justifyContent,
          maxWidth: '700px',
          whiteSpace: 'normal',
          overflow: 'visible',
          wordBreak: 'break-word',
        }}
      >
        {paragraphText}
      </Typography>

      {/* Button */}
      {showButton && (
        <Button
          variant="contained"
          component={Link}
          to={buttonHyperlink}
          sx={{
            backgroundColor: buttonColor,
            height: buttonHeight,
            width: buttonWidth,
            marginTop: buttonMarginTop,
            fontFamily: buttonTextFont,
            fontSize: buttonTextSize,
            color: buttonTextColor,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            alignSelf: alignment,
            '&:hover': {
              backgroundColor: buttonColor,
              opacity: 0.9,
            },
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default ParagraphSection;
