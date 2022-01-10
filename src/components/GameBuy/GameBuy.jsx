import React from "react";
import Button from "../Button/Button";
import "./GameBuy.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reduse";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handeleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="GameBuy">
      <span className="gamePrise">{game.price} грн.</span>
      <Button
        type={isItemInCart ? "secondary" : "primery"}
        onClick={handeleClick}
      >
        {isItemInCart ? "Убрать из корзинны" : "В корзину"}
      </Button>
    </div>
  );
};
export default GameBuy;
