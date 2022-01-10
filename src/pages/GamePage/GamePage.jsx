import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../components/GameBuy/GameBuy";
import GameCover from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import "./GamePage.css";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;
  return (
    <div className="gamePage">
      <h1 className="gamePageTitle">{game.title}</h1>
      <div className="gamePagContent">
        <div className="gamePageleft">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title={`Youtube${game.title}`}
            frameBorder={0}
          ></iframe>
        </div>
        <div className="gamePageRight">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secendotyText">Попялярные метки этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="gamePageByGame">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
