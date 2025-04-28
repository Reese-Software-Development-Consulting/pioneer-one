import React from "react";
import CustomHeader from "../components/pageComponents/CustomHeader";
import LinkFooter from "../components/pageComponents/LinkFooter";
import NavLinkPositionEnum from "../enums/NavLinkPositionEnum";

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

  const isLinkBarVisible = true; // or pull from somewhere dynamic
  const headerHeight = 80; // same as your headerHeight prop
  const linkBarHeight = isLinkBarVisible ? 40 : 0;

  const totalHeaderHeight = headerHeight + linkBarHeight; // 120px if both are showing

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CustomHeader
        title="Carl's Construction"
        titleFont="'Poppins', sans-serif"
        titleColor="#000"
        profileImage={ProfileImage}
        locations={locations}
        phoneNumbers={phoneNumbers}
        socialLinks={socialLinks}
        isLinkBarVisible={true}
        topLinkBackgroundColor="#000"
        topLinkTextColor="#fff"
        navItems={navItems}
        navBarBackgroundColor="white"
        navBarTextColor="black"
        navBarItemFont="'Roboto', sans-serif"
        navBarItemSpacing="2rem"
        navBarItemHoverColor="#FFB400"
        isSticky={true}
        navLinkPosition={NavLinkPositionEnum.CENTER}
        headerHeight={`${headerHeight}px`}
      />

      <main style={{ flexGrow: 1, padding: "2rem", marginTop: `${totalHeaderHeight}px` }}>
        {children}
      </main>

      <LinkFooter
        backgroundColor="white"
        iconColor="black"
        hoverColor="#FFB400"
        icons={socialLinks}
      />
    </div>
  );
};

export default MainLayout;