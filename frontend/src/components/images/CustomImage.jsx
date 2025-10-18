//An Image

import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CustomImage = ({
  src,
  alt = 'Image',
  width = '100%',
  height = '200px',
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
  aspectRatio = '16/9',
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
  };

  const mediaStyles = responsive && useAspectRatio
    ? {
        width: '100%',
        aspectRatio: aspectRatio,
        objectFit,
      }
    : {
        width: '100%',
        height,
        objectFit,
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
        sx={mediaStyles}
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

export default CustomImage;
