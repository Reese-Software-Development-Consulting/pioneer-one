import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  useMediaQuery,
  Typography,
  IconButton,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Product } from '../../models/Product';

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  product: Product;
  textFont?: string;
  titleColor?: string;
  priceColor?: string;
  titleFontSize?: string;
  priceFontSize?: string;
  buttonColor?: string;
  buttonSize?: 'small' | 'medium' | 'large';
  handleButtonClick: (product: Product) => void;
}

export const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  onClose,
  product,
  textFont = 'Arial',
  titleColor = '#000',
  priceColor = '#2e7d32',
  titleFontSize = '1.4rem',
  priceFontSize = '1.1rem',
  buttonColor = '#1976d2',
  buttonSize = 'medium',
  handleButtonClick,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageIndex, setImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const images = product.image_urls || [];

  const handlePrev = () => setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setImageIndex((prev) => (prev + 1) % images.length);

  return (
    <Dialog
        open={open}
        onClose={onClose}
        fullScreen={fullScreen}
        maxWidth={false}
        fullWidth={false}
        slotProps={{
            paper: {
            sx: {
                width: fullScreen ? '100%' : '700px',
                height: fullScreen ? '100%' : '500px',
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
            },
            },
        }}
    >
      <Box
        sx={{ width: '50%', position: 'relative' }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {images.length > 0 && (
          <img
            src={images[imageIndex]}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}

        {hovering && images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
              }}
            >
              <ArrowBackIos />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </>
        )}
      </Box>

      <DialogContent
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: textFont,
        }}
      >
        <Typography sx={{ fontSize: titleFontSize, color: titleColor, fontWeight: 600 }}>
          {product.title}
        </Typography>
        <Typography sx={{ fontSize: priceFontSize, color: priceColor, mb: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          size={buttonSize}
          onClick={() => handleButtonClick(product)}
          sx={{
            backgroundColor: buttonColor,
            fontFamily: textFont,
            '&:hover': {
              backgroundColor: buttonColor,
              opacity: 0.9,
            },
          }}
        >
          Add to Cart
        </Button>
      </DialogContent>
    </Dialog>
  );
};
