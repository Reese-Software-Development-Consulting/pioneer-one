//Essentially just an mui button that simplifies using hyperlinks

import Button from '@mui/material/Button';

const CustomButton = ({ 
  color = 'primary',
  rounded = false,
  square = false,
  text = 'Click Me',
  height = '40px',
  width = '300px',
  onClick = () => {},
  hyperlink = null
}) => {

  const borderRadius = rounded ? '50px' : square ? '0px' : '8px';

  const handleClick = () => {
    if (hyperlink) {
      window.location.href = hyperlink;
    } else {
      onClick();
    }
  };

  return (
    <Button 
      variant="contained" 
      onClick={handleClick}
      sx={{ 
        height: height, 
        width: width, 
        backgroundColor: color, 
        borderRadius: borderRadius, 
        padding: '12px 24px', 
        fontSize: '1rem', 
        maxWidth: '90vw', 
        textTransform: 'none',
        '@media (min-width: 600px)': { fontSize: '1.1rem', maxWidth: '300px' }
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
