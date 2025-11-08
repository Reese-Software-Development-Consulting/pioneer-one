import React from "react";
import PropTypes from "prop-types";
import Orientation from "../../enums/Orientation";
import PositionEnum from "../../enums/PositionEnum";

const toUnit = (v) => (typeof v === "number" ? `${v}px` : v);

const Container = ({
  orientation = Orientation.HORIZONTAL,
  position = PositionEnum.LEFT,
  withinSpace = false,
  gap = "1rem",
  padding = "0",
  style,
  children,
  ...rest
}) => {
  const items = React.Children.toArray(children);

  const isMobile = typeof window !== "undefined"
    ? window.matchMedia("(max-width: 900px)").matches
    : false;

  const isHorizontal = orientation === Orientation.HORIZONTAL && !isMobile;
  const flexDirection = isHorizontal ? "row" : "column";

  // Desktop behavior: horizontal or vertical layout
  let justifyContent = "flex-start";
  let alignItems = "flex-start";

  const paddingY = toUnit(padding);

  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        gap,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: 0,
        paddingRight: 0,
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {items.map((child, i) => {
        const childStyle = {
          display: "flex",
          flexDirection: "column",
          flex: "0 1 auto",       // let child size naturally
          maxWidth: "100%",
          minWidth: 0,
          overflow: "visible",
          boxSizing: "border-box",
        };

        return (
          <div key={i} style={childStyle}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

Container.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  position: PropTypes.oneOf(Object.values(PositionEnum)),
  withinSpace: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Container;
