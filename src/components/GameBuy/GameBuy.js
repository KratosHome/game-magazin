import React from "react";
import Button from "../Button/Button";
import "./GameBuy.css";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reduse";

const GameBuy = ({ game }) => {
  const dispatch = useDispatch();

  const handeleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  };
  return (
    <div className="GameBuy">
      <span className="gamePrise">{game.price} грн.</span>
      <Button type="primery" onClick={handeleClick}>
        В корзину
      </Button>
    </div>
  );
};
export default GameBuy;
