import React from "react";

export const NextArrow = React.memo(({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, padding: "10px", color: "red" }}
      onClick={onClick}
      role="button"
      aria-label="Next slide"
    />
  );
});

export const PrevArrow = React.memo(({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, padding: "10px" }}
      onClick={onClick}
      role="button"
      aria-label="Previous slide"
    />
  );
});
