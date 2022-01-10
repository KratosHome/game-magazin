import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/game/reduse";
import GameBuy from "../GameBuy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGenre/GameGenre";
import "./GameItem.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.id}`);
  };
  /*onClick={handleClick}*/
  return (
    <div className="gameItem" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="gmaeItemDitales gmaeItemDiscripton">
        <span className="gameItemTitle">{game.title}</span>
        <div className="gameItemGenre">
          {game.genres.map((gener) => (
            <GameGenre genre={gener} key={gener} />
          ))}
        </div>
        <div className="gameItemBuy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
