import React from "react";
import CustomHeader from "../components/headers/CustomHeader";
import CustomFooter from "../components/footers/CustomFooter";
import NavLinkPositionEnum from "../enums/PositionEnum";
import ColorThemes from "../enums/ColorThemes";

import ProfileImage from "../assets/test_images/profile-image.jpg";

const MainLayout = ({ 
  children,
  contentBackground = ColorThemes.Earthy.Primary2, 
  contentTextColor = ColorThemes.Earthy.Text, 
  contentFont = "'Poppins', sans-serif", 
  contentPadding = "2rem" 
}) => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];

  const socialLinks = [
    { platform: "Instagram", href: "https://instagram.com" },
    { platform: "LinkedIn", href: "https://linkedin.com" },
    { platform: "Twitter", href: "https://twitter.com" },
  ];

  const locations = [
    { label: "Northumberland, PA", url: "https://maps.google.com/?q=Northumberland, PA" },
    { label: "Ocean City, NJ", url: "https://maps.google.com/?q=Ocean City, NJ" },
    { label: "Wilmington, NC", url: "https://maps.google.com/?q=Wilmington, NC" },
  ];

  const phoneNumbers = [
    "(570) 678-1919",
    "(609) 881-2633",
    "(910) 310-9900",
  ];

  const isLinkBarVisible = true;
  const headerHeight = 100;
  const linkBarHeight = isLinkBarVisible ? 40 : 0;
  const totalHeaderHeight = headerHeight + linkBarHeight;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CustomHeader
        title="Carl's Construction"
        titleFont="'Poppins', sans-serif"
        titleColor={ColorThemes.Earthy.Text}
        titleTextSize="25px"
        profileImage={ProfileImage}
        locations={locations}
        phoneNumbers={phoneNumbers}
        socialLinks={socialLinks}
        isLinkBarVisible={true}
        topLinkBackgroundColor={ColorThemes.Earthy.Primary2}
        topLinkTextColor={ColorThemes.Earthy.Primary1}
        topLinkSocialIconHoverColor={ColorThemes.Earthy.Secondary1}
        navItems={navItems}
        navBarBackgroundColor={ColorThemes.Earthy.Primary1}
        navBarTextColor={ColorThemes.Earthy.Text}
        navBarItemFont="'Poppins', sans-serif"
        navBarItemSpacing="6rem"
        navBarItemHoverColor={ColorThemes.Earthy.Secondary1}
        navBarTextSize="20px"
        isSticky={true}
        navLinkPosition={NavLinkPositionEnum.CENTER}
        headerHeight={`${headerHeight}px`}
      />

<main
        style={{
          flexGrow: 1,
          marginTop: `${totalHeaderHeight}px`,
          padding: contentPadding,
          backgroundColor: contentBackground,
          color: contentTextColor,
          fontFamily: contentFont,
        }}
      >
        {children}
      </main>

      <CustomFooter
        height="320px"
        backgroundColor={ColorThemes.Earthy.Primary2}
        sticky={false}
        companyLogo={ProfileImage}
        showScrollToTopButton={true}
        scrollToTopButtonColor={ColorThemes.Earthy.Text}
        scrollToTopArrowColor={ColorThemes.Earthy.Primary1}
        textFont="var(--font-poppins)"
        companyName="Carl's Construction"
        isCompanyNameBold={true}
        email="info@carl.com"
        phone="(704) 532-3836"
        addressLine1="P.O. Box 481179"
        addressLine2="Charlotte, NC 28269"
        showBottomTabBar={true}
        bottomTabBarBackgroundColor={ColorThemes.Earthy.Primary2}
        socialLinks={socialLinks}
        socialHoverColor={ColorThemes.Earthy.Secondary1}
      />
    </div>
  );
};

export default MainLayout;
