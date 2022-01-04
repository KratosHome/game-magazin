import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMeny";
import { calcToltalPricse } from "../utlits";
import "./CartBlock.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrise = calcToltalPricse(items);
  return (
    <div className="cartBlock">
      <AiOutlineShoppingCart size={25} className="cartBlockIcon" />
      <span className="cartBlockTotalPrise">{totalPrise} грн.</span>
      <CartMenu items={items} onClick={() => null} />
    </div>
  );
};

export default CartBlock;
