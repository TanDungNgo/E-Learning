import React from "react";
import ButtonBase from "./Button.module.css";

const Button = (props) => {
  const { textContent, className, onClick, disabled } = props;
  return (
    <button
      className={`${ButtonBase["buttonBase"]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {textContent}
    </button>
  );
};

export default Button;
