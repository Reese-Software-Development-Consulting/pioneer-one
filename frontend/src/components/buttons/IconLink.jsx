//An Icon that acts as a hyperlink with some added effects
import React from 'react';
import IconButton from "@mui/material/IconButton";

const IconLink = ({
  IconComponent,
  href,
  label,
  color = "#aaa",
  hoverColor = "#fff",
  buttonSize = "large",          // "small" | "medium" | "large"
  iconSize = 24,                 // "small" | "medium" | "large" | number | "24px" | "2rem"
}) => {
  const isEnum = ["inherit", "small", "medium", "large"].includes(iconSize);
  const sizeCss = typeof iconSize === "number" ? `${iconSize}px` : iconSize;

  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      size={buttonSize}
      disableRipple
      disableFocusRipple
      sx={{
        color,
        backgroundColor: "transparent",
        WebkitTapHighlightColor: "transparent",
        transition: "color 0.3s",
        "&:hover": { color: hoverColor, backgroundColor: "transparent" },
        "&:active": { boxShadow: "none", backgroundColor: "transparent" },
        "&.Mui-focusVisible": { boxShadow: "none", backgroundColor: "transparent" },
        "& .MuiTouchRipple-root": { display: "none" },
      }}
    >
      {isEnum ? (
        <IconComponent fontSize={iconSize} />
      ) : (
        <IconComponent style={{ fontSize: sizeCss, width: sizeCss, height: sizeCss, flexShrink: 0 }} />
      )}
    </IconButton>
  );
};

export default IconLink;