import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/core";
import GameCard from "./game-card/game-card";

const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const g = JSON.parse(sessionStorage.getItem("games")).slice(0, 9);
    setGames(g);
  }, []);
  console.log(games);
  return (
    <Flex flexWrap="wrap">
      {games.length !== 0
        ? games.map((game, index) => {
            return (
              <GameCard
                key={index}
                game={{
                  title: "LittleBigPlanet PS Vita",
                  url: "/games/littlebigplanet-vita/vita-98907",
                  platform: "PlayStation Vita",
                  score: 9,
                  genre: "Platformer",
                  editors_choice: "Y",
                  release_year: 2012
                }}
              />
            );
          })
        : null}
      {/* <GameCard
        game={{
          title: "LittleBigPlanet PS Vita",
          url: "/games/littlebigplanet-vita/vita-98907",
          platform: "PlayStation Vita",
          score: 9,
          genre: "Platformer",
          editors_choice: "Y",
          release_year: 2012
        }}
      />
      <GameCard
        game={{
          title: "LittleBigPlanet PS Vita",
          url: "/games/littlebigplanet-vita/vita-98907",
          platform: "PlayStation Vita",
          score: 9,
          genre: "Platformer",
          editors_choice: "Y",
          release_year: 2012
        }}
      /> */}
    </Flex>
  );
};

export default GameList;
