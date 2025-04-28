import React from "react";
import SimpleHeader from "../components/pageComponents/SimpleHeader";
import LinkFooter from "../components/pageComponents/LinkFooter";

import ProfileImage from "../assets/test_images/profile-image.jpg"

const MainLayout = ({ children }) => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialIcons = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SimpleHeader
        title="Carl's Construction"
        profileImage={ProfileImage}
        navLinks={navLinks}
        backgroundColor="white"
        textColor="black"
        fontSize="24px"
        font="'Montserrat', sans-serif"
        hoverColor="#FFB400"
        navAlignment="center"
      />

      <main style={{ flexGrow: 1, padding: "2rem" }}>
        {children}
      </main>

      <LinkFooter
        backgroundColor="white"
        iconColor="black"
        hoverColor="#FFB400"
        icons={socialIcons}
      />
    </div>
  );
};

export default MainLayout;