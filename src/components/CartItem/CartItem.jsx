import React from "react";
import "./CartItem.css";

const CartItem = ({ price, title, id }) => {
  return (
    <div className="CartItem">
      <span>{title}</span>
      <div className="cartItemPrise">
        <span>{price} грн.</span>
      </div>
    </div>
  );
};

export default CartItem;
