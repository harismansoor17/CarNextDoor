import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const btnStyle = {
    backgroundColor: props.bgColor || "#4CAF50",
    color: props.textColor ,
    padding: props.btnPadding || "8px",
    cursor: "pointer",
    fontWeight: props.fontWeight || "",
    fontSize: props.fontSize || "12px",
    border: props.btnBorder || "none",
    outline: "none",
    margin: "10px",
    borderRadius: isHovered
      ? "0px" // Apply hover effect
      : props.btnRadius || "10px", // Default shadow
    transition: "all 0.3s ease",
  };

  return (
    <button
      style={btnStyle}
      onMouseEnter={() => setIsHovered(true)} // Toggle hover state
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.title || "Click Me"} {/* Default title */}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
