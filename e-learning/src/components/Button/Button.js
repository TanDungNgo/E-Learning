import React from "react";
import ButtonBase from "./Button.module.css";

const Button = (props) => {
  const { textContent, className, onClick } = props;
  return (
    <button
      className={`${ButtonBase["buttonBase"]} ${className}`}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};

export default Button;
