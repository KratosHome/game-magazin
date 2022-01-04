import React from "react";
import "./IntemsInCart.css";

const IntemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="itemsInCart">{quantity}</div> : null;
};

export default IntemsInCart;
