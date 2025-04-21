import React from 'react';
import IconButton from '@mui/material/IconButton';

const SocialIconLink = ({ IconComponent, href, label, color = '#aaa', hoverColor = '#fff' }) => (
  <IconButton
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    sx={{ color, transition: 'color 0.3s', '&:hover': { color: hoverColor }}}
  >
    <IconComponent fontSize="medium" />
  </IconButton>
);

export default SocialIconLink;