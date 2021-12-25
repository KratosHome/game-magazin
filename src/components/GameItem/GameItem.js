import React from "react";
import GameBuy from "../GameBuy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGenre/GameGenre";
import "./GameItem.css";

const GameItem = ({ game }) => {
  return (
    <div className="gameItem">
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
