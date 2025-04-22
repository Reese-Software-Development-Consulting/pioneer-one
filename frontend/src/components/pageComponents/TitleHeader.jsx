import React from 'react';

const TitleHeader = ({
  profileImage,
  companyName = 'Your Company',
  motto = '',
  // Header styles
  headerBgColor = '#0047BA',
  headerTextColor = '#FFFFFF',
  headerFont = 'Arial, sans-serif',
  headerFontSize = '18px',
  // Nav styles
  navBgColor = '#F3F4F6',
  navTextColor = '#000000',
  navFont = 'Arial, sans-serif',
  navFontSize = '16px',
  hoverColor = '#0071DC',
  // Links
  navLinks = [],
}) => {
  return (
    <div>
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '12px 40px',
          backgroundColor: headerBgColor,
          color: headerTextColor,
          fontFamily: headerFont,
          fontSize: headerFontSize,
        }}
      >
        {profileImage && (
          <img
            src={profileImage}
            alt="logo"
            style={{
              height: '50px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        )}
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{companyName}</div>
          {motto && (
            <div style={{ fontSize: '14px', opacity: 0.85 }}>{motto}</div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: navBgColor,
          padding: '10px 20px',
          fontFamily: navFont,
          fontSize: navFontSize,
        }}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{
              margin: '0 15px',
              color: navTextColor,
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s, border-bottom 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.color = hoverColor;
              e.target.style.borderBottom = `2px solid ${hoverColor}`;
            }}
            onMouseOut={(e) => {
              e.target.style.color = navTextColor;
              e.target.style.borderBottom = 'none';
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TitleHeader;