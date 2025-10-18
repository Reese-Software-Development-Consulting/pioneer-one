//Interactive Custom Footer

import { Box, Typography, IconButton, Fade, useMediaQuery, useTheme } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { iconMap } from '../../utils/iconRegistry';
import SocialIconLink from '../buttons/IconLink';

const CustomFooter = ({
  height = '300px',
  backgroundColor = '#333',
  sticky = false,
  companyLogo,
  logoHeight = '80px',
  logoWidth = 'auto',
  showScrollToTopButton = true,
  scrollToTopButtonColor = '#222',
  scrollToTopArrowColor = '#fff',
  textFont = 'Poppins, sans-serif',
  companyName = '',
  isCompanyNameBold = true,
  email = '',
  phone = '',
  addressLine1 = '',
  addressLine2 = '',
  showBottomTabBar = true,
  bottomTabBarBackgroundColor = '#000',
  socialLinks = [],
  socialHoverColor = '#FFB400'
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        height,
        backgroundColor,
        color: '#fff',
        fontFamily: textFont,
        position: sticky ? 'fixed' : 'relative',
        bottom: sticky ? 0 : 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 10
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-around"
        alignItems="center"
        flex={1}
        p={2}
        textAlign={isMobile ? 'center' : 'left'}
        gap={isMobile ? 2 : 0}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            {isCompanyNameBold ? <b>{companyName}</b> : companyName}
          </Typography>
          <Typography>{addressLine1}</Typography>
          <Typography>{addressLine2}</Typography>
        </Box>

        {companyLogo && (
          <Box
            component="img"
            src={companyLogo}
            alt="Company Logo"
            sx={{
              height: logoHeight,
              width: logoWidth,
              my: isMobile ? 2 : 0,
              position: isMobile ? 'relative' : 'absolute'
            }}
          />
        )}

        <Box>
          <Typography>{email}</Typography>
          <Typography>{phone}</Typography>
        </Box>
      </Box>

      {showScrollToTopButton && (
        <Fade in={true}>
          <IconButton
            onClick={handleScrollToTop}
            sx={{
              alignSelf: 'center',
              backgroundColor: scrollToTopButtonColor,
              color: scrollToTopArrowColor,
              '&:hover': { backgroundColor: scrollToTopButtonColor },
              marginBottom: '10px'
            }}
          >
            <KeyboardArrowUp />
          </IconButton>
        </Fade>
      )}

      {showBottomTabBar && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ backgroundColor: bottomTabBarBackgroundColor, py: 1 }}
        >
          {socialLinks.map(({ platform, href }) => {
            const IconComponent = iconMap[platform];
            if (!IconComponent) return null;

            return (
              <SocialIconLink
                key={platform}
                IconComponent={IconComponent}
                href={href}
                label={platform}
                hoverColor={socialHoverColor}
              />
            );
          })}
        </Box>
      )}

      <Box textAlign="center" py={1} fontSize="0.8rem">
        <Typography variant="body2">© {new Date().getFullYear()} {companyName}</Typography>
      </Box>
    </Box>
  );
};

export default CustomFooter;
