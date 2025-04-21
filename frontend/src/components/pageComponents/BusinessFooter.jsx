import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SocialIconLink from '../buttons/SocialIconLink';
import { iconMap } from '../../utils/iconRegistry';

const BusinessFooter = ({
  backgroundColor = '#000',
  backgroundImage = '',
  leftContent = [],
  rightContent = [],
  socialIcons = [],
  iconColor = '#aaa',
  hoverColor = '#fff',
}) => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '2rem',
        backgroundColor,
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      {/* Left Column */}
      <Box>
        {leftContent.map((item, idx) => (
          <Typography
            key={idx}
            sx={{
              color: item.textColor,
              fontSize: item.fontSize,
              fontFamily: item.font,
              marginBottom: '0.5rem',
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Box>

      {/* Center Column: Social Icons */}
      <Box display="flex" gap={1} justifyContent="center">
        {socialIcons.map(({ name, href }) => {
          const IconComponent = iconMap[name];
          if (!IconComponent) return null;
          return (
            <SocialIconLink
              key={name}
              IconComponent={IconComponent}
              href={href}
              label={name}
              color={iconColor}
              hoverColor={hoverColor}
            />
          );
        })}
      </Box>

      {/* Right Column */}
      <Box>
        {rightContent.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            underline="hover"
            sx={{
              display: 'block',
              color: item.textColor,
              fontSize: item.fontSize,
              fontFamily: item.font,
              marginBottom: '0.5rem',
            }}
          >
            {item.text}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BusinessFooter;