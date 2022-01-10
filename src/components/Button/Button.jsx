import classNames from "classnames";
import React from "react";
import "./button.css";

const Button = ({ onClick, type, children, size = "s" }) => {
  const bntClass = classNames({
    btn: true,
    "btn-secondory": type === "secondary",
    "btn-primery": type === "primery",
    "btn-small": size === "s",
    "btn-mediun": size === "m",
  });
  return (
    <button classNames={bntClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
