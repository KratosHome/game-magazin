import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMeny";
import IntemsInCart from "../ItemsInCart/ItemsInCart";
import { calcToltalPricse } from "../utlits";
import "./CartBlock.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrise = calcToltalPricse(items);
  return (
    <div className="cartBlock">
      <IntemsInCart quantity={items.length} />
      <AiOutlineShoppingCart
        size={25}
        className="cartBlockIcon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrise > 0 ? (
        <span className="cartBlockTotalPrise">{totalPrise} грн.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default CartBlock;
