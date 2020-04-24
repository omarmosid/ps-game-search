import React, { useEffect, useContext, useState } from "react";
import GameList from "./features/game-list/game-list";
import { Route, Switch } from "react-router-dom";
import GamePage from "./features/game-page/game-page";
import axios from "axios";
import Search from "./features/search/search";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/omarmosid/1d7cf914f1f93136d57e92920c1b9e74/raw/fecc872e3825246e77a178ff0f3197077cd13481/hackerEarthGames.json"
      )
      .then(res => {
        sessionStorage.setItem("games", JSON.stringify(res.data));
        setData(res.data);
      });
  }, []);
  return (
    <Switch>
      <Route path="/" exact>
        <Search />
      </Route>
      <Route path="/games" exact>
        <GameList />
      </Route>
      <Route path="/games/:gameslug/:id" exact>
        <GamePage />
      </Route>
      <Route path="/">404 Page not found</Route>
    </Switch>
  );
}
