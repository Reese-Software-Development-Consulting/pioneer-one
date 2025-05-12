import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { iconMap } from '../../../utils/iconRegistry';
import SocialIconLink from '../../buttons/SocialIconLink';
import NavLinkPositionEnum from '../../../enums/NavLinkPositionEnum';

const CustomHeader = ({
  title = '',
  titleFont = 'Arial, sans-serif',
  titleColor = '#000',
  titleTextSize = '20px',
  profileImage = '',
  locations = [],
  phoneNumbers = [],
  socialLinks = [],
  isLinkBarVisible = true,
  topLinkBackgroundColor = '#000',
  topLinkTextColor = '#fff',
  topLinkSocialIconHoverColor = '#FFB400',
  navItems = [],
  navBarBackgroundColor = '#fff',
  navBarTextColor = '#000',
  navBarItemFont = 'Arial, sans-serif',
  navBarItemSpacing = '2rem',
  navBarItemHoverColor = '#FFB400',
  navBarTextSize = '16px',
  isSticky = false,
  navLinkPosition = NavLinkPositionEnum.CENTER,
  headerHeight = '80px',
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleOpenDropdown = (event, items) => {
    setAnchorEl(event.currentTarget);
    setDropdownItems(items);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setDropdownItems([]);
  };

  const justifyContentMap = {
    [NavLinkPositionEnum.LEFT]: 'flex-start',
    [NavLinkPositionEnum.CENTER]: 'center',
    [NavLinkPositionEnum.RIGHT]: 'flex-end',
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Top Link Bar */}
      {isLinkBarVisible && (
        <Box
          sx={{
            width: '100%',
            backgroundColor: topLinkBackgroundColor,
            color: topLinkTextColor,
            p: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: isSticky ? 'fixed' : 'relative',
            top: 0,
            zIndex: 1200,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            {locations.map((loc, idx) => (
              <Box key={`locphone-${idx}`} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">{loc}</Typography>
                {phoneNumbers[idx] && (
                  <>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">{phoneNumbers[idx]}</Typography>
                  </>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingRight: '10px' }}>
            {socialLinks.map(({ platform, href }, idx) => {
              const IconComponent = iconMap[platform];
              if (!IconComponent) return null;
              return (
                <SocialIconLink
                  key={`social-${idx}`}
                  IconComponent={IconComponent}
                  href={href}
                  label={platform}
                  color={topLinkTextColor}
                  hoverColor={topLinkSocialIconHoverColor}
                />
              );
            })}
          </Box>
        </Box>
      )}

      {/* Main Navbar */}
      <AppBar
        position={isSticky ? 'fixed' : 'static'}
        sx={{
          backgroundColor: navBarBackgroundColor,
          color: navBarTextColor,
          boxShadow: 'none',
          height: headerHeight,
          top: isSticky && isLinkBarVisible ? '40px' : '0px',
          zIndex: 1100,
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left (Logo + Title) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {profileImage && <Avatar src={profileImage} alt="Logo" sx={{ width: 48, height: 48 }} />}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: titleFont,
                color: titleColor,
                fontWeight: 'bold',
                fontSize: titleTextSize,
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Center/Right (Nav Links) */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: justifyContentMap[navLinkPosition],
              alignItems: 'center',
              gap: navBarItemSpacing,
            }}
          >
            {navItems.map((item, index) => (
              item.dropdownItems && item.dropdownItems.length > 0 ? (
                <Button
                  key={index}
                  onClick={(e) => handleOpenDropdown(e, item.dropdownItems)}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: navBarTextColor,
                    fontWeight: 'bold',
                    fontFamily: navBarItemFont,
                    fontSize: navBarTextSize,
                    '&:hover': {
                      color: navBarItemHoverColor,
                    }
                  }}
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  key={index}
                  component={Link}
                  to={item.link}
                  sx={{
                    color: navBarTextColor,
                    fontWeight: 'bold',
                    fontFamily: navBarItemFont,
                    fontSize: navBarTextSize,
                    '&:hover': {
                      color: navBarItemHoverColor,
                    }
                  }}
                >
                  {item.title}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdown}
      >
        {dropdownItems.map((dropItem, idx) => (
          <MenuItem
            key={idx}
            component={Link}
            to={dropItem.link}
            onClick={handleCloseDropdown}
          >
            {dropItem.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CustomHeader;
