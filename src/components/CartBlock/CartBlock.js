import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./CartBlock.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrise = items.reduce((acc, game) => (acc += game.price), 0);
  return (
    <div className="cartBlock">
      <AiOutlineShoppingCart size={25} className="cartBlockIcon" />
      <span className="cartBlockTotalPrise">{totalPrise} грн.</span>
    </div>
  );
};

export default CartBlock;
