import React from "react";
import Button from "../Button/Button";
import "./GameBuy.css";

const GameBuy = ({ game }) => {
  return (
    <div className="GameBuy">
      <span className="gamePrise">{game.price} грн.</span>
      <Button type="primery" onClick={() => null}>
        В корзину
      </Button>
    </div>
  );
};
export default GameBuy;
