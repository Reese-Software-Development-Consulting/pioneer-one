import React from "react";
import { Link } from "react-router-dom";

const SimpleHeader = ({
  profileImage,
  title,
  navLinks = [],
  backgroundColor = "#2C2B2B",
  font = "Arial, sans-serif",
  fontSize = "18px",
  navAlignment = "center", // 'left', 'center', 'right'
  textColor = "white",
  hoverColor = "#FFB400",
  height = "60px",
}) => {
  const justifyMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor,
        padding: "0 40px",
        height,
        fontFamily: font,
        color: textColor,
        fontSize,
        overflow: "hidden",
      }}
    >
      {/* Left: Logo + Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "100%",
        }}
      >
        {profileImage && (
          <img
            src={profileImage}
            alt="logo"
            style={{
              height: "80%",
              maxHeight: "80%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        )}
        {title && <strong style={{ fontSize }}>{title}</strong>}
      </div>

      {/* Center: Navigation Links */}
      <nav
        style={{
          flex: 1,
          display: "flex",
          justifyContent: justifyMap[navAlignment],
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "50px",
            padding: 0,
            margin: 0,
          }}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                style={{
                  color: textColor,
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize,
                  transition: "color 0.3s, border-bottom 0.3s",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = hoverColor;
                  e.target.style.borderBottom = `2px solid ${hoverColor}`;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = textColor;
                  e.target.style.borderBottom = "none";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right filler to balance layout */}
      <div style={{ width: "40px" }} />
    </header>
  );
};

export default SimpleHeader;
