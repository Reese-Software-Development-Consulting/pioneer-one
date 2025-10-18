import React, { useState } from 'react';
import ColorThemes from '../../enums/ColorThemes'
import { Card, CardContent, Typography, Button, IconButton, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Product } from '../../models/Product';

interface ProductCardProps {
  product: Product;
  textFont?: string;
  titleColor?: string;
  priceColor?: string;
  titleFontSize?: string;
  priceFontSize?: string;
  buttonColor?: string;
  buttonSize?: 'small' | 'medium' | 'large';
  handleButtonClick: (product: Product) => void;
  handleDoubleClick?: (product: Product) => void;
  imageHeight?: string;
  imageWidth?: string;
  cardHeight?: string;
  cardWidth?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  textFont = 'Arial',
  titleColor = 'black',
  priceColor = 'black',
  titleFontSize = '1.2rem',
  priceFontSize = '1rem',
  buttonColor = ColorThemes.Modern.Secondary1,
  buttonSize = 'medium',
  handleButtonClick,
  handleDoubleClick,
  imageHeight = '200px',
  imageWidth = '100%',
  cardHeight = 'auto',
  cardWidth = '300px',
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const images = product.image_urls || [];

  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Card
      onDoubleClick={() => handleDoubleClick?.(product)}
      sx={{
        width: cardWidth,
        height: cardHeight,
        fontFamily: textFont,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: imageHeight,
          width: imageWidth,
          overflow: 'hidden',
        }}
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

      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: titleColor, fontSize: titleFontSize, fontFamily: textFont }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: priceColor, fontSize: priceFontSize, fontFamily: textFont }}
        >
          ${product.price.toFixed(2)}
        </Typography>

        <Button
          variant="contained"
          size={buttonSize}
          onClick={() => handleButtonClick(product)}
          sx={{
            backgroundColor: buttonColor,
            mt: 2,
            fontFamily: textFont,
            '&:hover': {
              backgroundColor: buttonColor,
              opacity: 0.9,
            },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
