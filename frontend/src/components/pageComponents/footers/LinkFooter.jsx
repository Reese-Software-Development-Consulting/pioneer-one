import React from 'react';
import Box from '@mui/material/Box';
import SocialIconLink from '../../buttons/SocialIconLink';
import { iconMap } from '../../../utils/iconRegistry';

const LinkFooter = ({ backgroundColor = '#000', iconColor = '#aaa', hoverColor = '#fff', icons = [] }) => {
  return (
    <Box component="footer" bgcolor={backgroundColor} py={2} display="flex" justifyContent="center" gap={1}>
      {icons.map(({ name, href }) => {
        const IconComponent = iconMap[name];
        if (!IconComponent) return null;
        return (
          <SocialIconLink key={name} IconComponent={IconComponent} href={href} label={name} color={iconColor} hoverColor={hoverColor} />
        );
      })}
    </Box>
  );
};

export default LinkFooter;