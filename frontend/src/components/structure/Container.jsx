//Component used for grouping and aligning multiple items horizontally or vertically

import React from "react";
import PropTypes from "prop-types";
import Orientation from "../../enums/Orientation";
import PositionEnum from "../../enums/PositionEnum";

const toUnit = (v) => (typeof v === "number" ? `${v}px` : v);

const Container = ({
  orientation = Orientation.HORIZONTAL,
  position = PositionEnum.LEFT,
  withinSpace = false,
  gap = "1rem",        // spacing between children
  padding = "0",       // now treated as *vertical-only* padding
  style,
  children,
  ...rest
}) => {
  const items = React.Children.toArray(children);
  const isHorizontal = orientation === Orientation.HORIZONTAL;

  // Group alignment
  let justifyContent = "flex-start";
  let alignItems = "stretch";

  if (isHorizontal) {
    if (position === PositionEnum.CENTER) justifyContent = "center";
    if (position === PositionEnum.RIGHT) justifyContent = "flex-end";
    if (position === PositionEnum.LEFT) justifyContent = "flex-start";
  } else {
    if (position === PositionEnum.CENTER) justifyContent = "center";
    if (position === PositionEnum.RIGHT) alignItems = "flex-end";
    if (position === PositionEnum.LEFT) alignItems = "flex-start";
  }

  // Child-level alignment
  let childJustify = "flex-start";
  if (position === PositionEnum.CENTER) childJustify = "center";
  if (position === PositionEnum.RIGHT) childJustify = "flex-end";

  const paddingY = toUnit(padding);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        justifyContent: withinSpace && isHorizontal ? "stretch" : justifyContent,
        alignItems: withinSpace && isHorizontal ? "stretch" : alignItems,
        gap,
        // vertical-only padding:
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: 0,
        paddingRight: 0,
        boxSizing: "border-box",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      {items.map((child, i) =>
        withinSpace && isHorizontal ? (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: childJustify,
              alignItems: "center",
              flex: 1,
              minWidth: 0,
            }}
          >
            {child}
          </div>
        ) : (
          <React.Fragment key={i}>{child}</React.Fragment>
        )
      )}
    </div>
  );
};

Container.propTypes = {
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  position: PropTypes.oneOf(Object.values(PositionEnum)),
  withinSpace: PropTypes.bool,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // vertical-only
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Container;