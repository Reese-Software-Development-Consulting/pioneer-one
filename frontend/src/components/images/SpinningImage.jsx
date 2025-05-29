import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SpinningImage = ({
  src,
  alt = 'Spinning Image',
  width = '150px',
  height = '150px',
  speed = '4s',
  borderRadius = '16px',
  objectFit = 'cover',
  boxShadow,
  padding,
  elevation = 1,
  margin = 'auto',
  center = false,
  maxWidth = '100%',
  responsive = false,
  useAspectRatio = false,
  aspectRatio = '1/1',
  onClick,
  hoverEffect = false,
  lazyLoad = true,
  className,
  title,
  role = 'img',
  ariaLabel,
  caption,
}) => {
  const cardStyles = {
    width: responsive && !useAspectRatio ? { xs: '100%', sm: '80%', md: width } : width,
    maxWidth,
    margin: center ? 'auto' : margin,
    borderRadius,
    overflow: 'hidden',
    padding,
    boxShadow,
    transition: hoverEffect ? 'transform 0.3s ease' : undefined,
    '&:hover': hoverEffect ? { transform: 'scale(1.03)' } : undefined,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mediaStyles = responsive && useAspectRatio
    ? {
        width: '100%',
        aspectRatio,
        objectFit,
        animation: `spin ${speed} linear infinite`,
      }
    : {
        width: '100%',
        height,
        objectFit,
        animation: `spin ${speed} linear infinite`,
      };

  return (
    <Card
      sx={cardStyles}
      elevation={elevation}
      onClick={onClick}
      className={className}
      role={role}
      aria-label={ariaLabel}
      title={title}
    >
      <CardMedia
        component="img"
        image={src}
        alt={alt}
        sx={{
          ...mediaStyles,
          '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
        loading={lazyLoad ? 'lazy' : 'eager'}
      />
      {caption && (
        <CardContent>
          {typeof caption === 'string' ? (
            <Typography variant="body2" color="text.secondary">
              {caption}
            </Typography>
          ) : (
            caption
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default SpinningImage;
