import React from "react";
import CustomHeader from "../components/pageComponents/headers/Header";
import CustomFooter from "../components/pageComponents/footers/Footer";
import NavLinkPositionEnum from "../enums/PositionEnum";
import ColorThemes from "../enums/ColorThemes";

import ProfileImage from "../assets/test_images/profile-image.jpg";

const MainLayout = ({ children }) => {
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
    "Northumberland, PA",
    "Ocean City, NJ",
    "Wilmington, NC",
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
        titleColor={ColorThemes.Modern.Text}
        titleTextSize="25px"
        profileImage={ProfileImage}
        locations={locations}
        phoneNumbers={phoneNumbers}
        socialLinks={socialLinks}
        isLinkBarVisible={true}
        topLinkBackgroundColor={ColorThemes.Modern.Primary2}
        topLinkTextColor={ColorThemes.Modern.Primary1}
        topLinkSocialIconHoverColor={ColorThemes.Modern.Secondary1}
        navItems={navItems}
        navBarBackgroundColor={ColorThemes.Modern.Primary1}
        navBarTextColor={ColorThemes.Modern.Text}
        navBarItemFont="'Poppins', sans-serif"
        navBarItemSpacing="6rem"
        navBarItemHoverColor={ColorThemes.Modern.Secondary1}
        navBarTextSize="20px"
        isSticky={true}
        navLinkPosition={NavLinkPositionEnum.CENTER}
        headerHeight={`${headerHeight}px`}
      />

      <main style={{ flexGrow: 1, padding: "2rem", marginTop: `${totalHeaderHeight}px` }}>
        {children}
      </main>

      <CustomFooter
        height="320px"
        backgroundColor={ColorThemes.Modern.Primary2}
        sticky={false}
        companyLogo={ProfileImage}
        showScrollToTopButton={true}
        scrollToTopButtonColor={ColorThemes.Modern.Text}
        scrollToTopArrowColor={ColorThemes.Modern.Primary1}
        textFont="var(--font-poppins)"
        companyName="Carl's Construction"
        isCompanyNameBold={true}
        email="info@carl.com"
        phone="(704) 532-3836"
        addressLine1="P.O. Box 481179"
        addressLine2="Charlotte, NC 28269"
        showBottomTabBar={true}
        bottomTabBarBackgroundColor={ColorThemes.Modern.Primary2}
        socialLinks={socialLinks}
        socialHoverColor={ColorThemes.Modern.Secondary1}
      />
    </div>
  );
};

export default MainLayout;
