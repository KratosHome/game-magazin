import React from "react";
import "./CartBlock.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartBlock = () => {
  return (
    <div className="cartBlock">
      <AiOutlineShoppingCart size={25} className="cartBlockIcon" />
      <span className="cartBlockTotalPrise">0 грн.</span>
    </div>
  );
};

export default CartBlock;
