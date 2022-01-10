import React, { useCallback, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartMenu from "../CartMenu/CartMeny";
import IntemsInCart from "../ItemsInCart/ItemsInCart";
import { calcToltalPricse } from "../utlits";
import "./CartBlock.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrise = calcToltalPricse(items);
  const navigate = useNavigate();

  const handaleCkicck = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate(`/order/`);
  }, [navigate]);

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
      {isCartMenuVisible && <CartMenu items={items} onClick={handaleCkicck} />}
    </div>
  );
};

export default CartBlock;
