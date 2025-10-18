//Custom header that includes a nav bar with optional dropdown menu, icons, phone links, location links, 

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

import { iconMap } from '../../utils/iconRegistry';
import SocialIconLink from '../buttons/IconLink';
import NavLinkPositionEnum from '../../enums/PositionEnum';

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
  logoWidth = 48,
  logoHeight = 48,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleOpenDropdown = (event, items) => {
    setAnchorEl(event.currentTarget);
    setDropdownItems(items);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setDropdownItems([]);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const justifyContentMap = {
    [NavLinkPositionEnum.LEFT]: 'flex-start',
    [NavLinkPositionEnum.CENTER]: 'center',
    [NavLinkPositionEnum.RIGHT]: 'flex-end',
  };

  const finalHeaderHeight = isMobile ? '60px' : headerHeight;

  return (
    <Box sx={{ width: '100%' }}>
      {isLinkBarVisible && !isMobile && (
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
              <Box
                key={`locphone-${idx}`}
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                <LocationOnIcon fontSize="small" />
                <Typography
                  variant="body2"
                  component="a"
                  href={loc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {loc.label}
                </Typography>

                {phoneNumbers[idx] && (
                  <>
                    <PhoneIcon fontSize="small" />
                    <Typography
                      variant="body2"
                      component="a"
                      href={`tel:${phoneNumbers[idx].replace(/\D/g, '')}`}
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {phoneNumbers[idx]}
                    </Typography>
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

      <AppBar
        position={isSticky ? 'fixed' : 'static'}
        sx={{
          backgroundColor: navBarBackgroundColor,
          color: navBarTextColor,
          boxShadow: 'none',
          height: finalHeaderHeight,
          top: isSticky && !isMobile && isLinkBarVisible ? '40px' : '0px',
          zIndex: 1100,
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {profileImage && (
                <Avatar
                  src={profileImage}
                  alt="Logo"
                  sx={{ width: logoWidth, height: logoHeight }}
                />
              )}
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
          </Link>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: justifyContentMap[navLinkPosition],
                alignItems: 'center',
                gap: navBarItemSpacing,
              }}
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return item.dropdownItems && item.dropdownItems.length > 0 ? (
                  <Button
                    key={index}
                    onClick={(e) => handleOpenDropdown(e, item.dropdownItems)}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                      color: isActive ? navBarItemHoverColor : navBarTextColor,
                      fontWeight: 'bold',
                      fontFamily: navBarItemFont,
                      fontSize: navBarTextSize,
                      borderBottom: isActive ? `2px solid ${navBarItemHoverColor}` : 'none',
                      '&:hover': { color: navBarItemHoverColor },
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
                      color: isActive ? navBarItemHoverColor : navBarTextColor,
                      fontWeight: 'bold',
                      fontFamily: navBarItemFont,
                      fontSize: navBarTextSize,
                      borderBottom: isActive ? `2px solid ${navBarItemHoverColor}` : 'none',
                      '&:hover': { color: navBarItemHoverColor },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseDropdown}>
        {dropdownItems.map((dropItem, idx) => (
          <MenuItem key={idx} component={Link} to={dropItem.link} onClick={handleCloseDropdown}>
            {dropItem.title}
          </MenuItem>
        ))}
      </Menu>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map((item, index) =>
              item.dropdownItems && item.dropdownItems.length > 0 ? (
                item.dropdownItems.map((dropItem, subIdx) => (
                  <ListItem key={`${index}-${subIdx}`} disablePadding>
                    <ListItemButton component={Link} to={dropItem.link}>
                      <ListItemText primary={dropItem.title} />
                    </ListItemButton>
                  </ListItem>
                ))
              ) : (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={Link} to={item.link}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CustomHeader;
