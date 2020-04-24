import React, { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  Flex,
  Grid,
  SimpleGrid,
  Box
} from "@chakra-ui/core";
import GameCard from "../game-list/game-card/game-card";

const Search = () => {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [err, setErr] = useState({});
  useEffect(() => {
    const g = JSON.parse(sessionStorage.getItem("games")).slice(0, 100);
    setGames(g);
  }, []);
  const handleSearchSubmit = e => {
    e.preventDefault();
    const g = JSON.parse(sessionStorage.getItem("games")).slice(0);
    let rgx = new RegExp(query.toLowerCase());
    try {
      const gfiltered = g.filter(game => {
        const term = game["title"].toLowerCase();
        if (rgx.test(term)) {
          return game;
        }
      });
      console.log(gfiltered);
      setGames(gfiltered);
    } catch (err) {
      setErr(err);
    }
  };
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <FormControl
        as="form"
        w="100%"
        py="3rem"
        maxWidth="lg"
        onSubmit={handleSearchSubmit}>
        <Input
          type="search"
          placeholder="Seach for a game"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </FormControl>
      <Box>{JSON.stringify(err)}</Box>
      <Flex w="100%" flexWrap="wrap" justifyContent="center">
        {games.length !== 0
          ? games.map((game, index) => {
              return <GameCard game={game} key={index} />;
            })
          : null}
      </Flex>
    </Flex>
  );
};

export default Search;
