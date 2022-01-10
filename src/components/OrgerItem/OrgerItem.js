import React from "react";
import { useDispatch } from "react-redux";
import GameCover from "../GameCover/GameCover";
import "./OrgerItem.css";
import { MdDeleteForever } from "react-icons/md";
import { deleteItemFromCart } from "../../redux/cart/reduse";

const OrgerItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="oredrItem">
      <div className="oredrItemCover">
        <GameCover image={game.image} />
      </div>
      <div className="orderItemTitle">
        <span>{game.title}</span>
      </div>
      <div className="oredrItemPrise">
        <span>{game.price} грн.</span>
        <MdDeleteForever
          size={25}
          className="oredrItemDelitIcon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default OrgerItem;
