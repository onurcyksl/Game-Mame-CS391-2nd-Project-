import React, { Component } from "react";
import gta from "./components/game_info/gta";
import mafia from "./components/game_info/mafia";
import witcher from "./components/game_info/witcher";
import Rainbow from "./components/game_info/Rainbow";
import coldwar from "./components/game_info/coldwar";
import nba from "./components/game_info/nba";
import fifa from "./components/game_info/fifa";
import nfl from "./components/game_info/nfl";
import cs from "./components/game_info/cs";
import alyx from "./components/game_info/alyx";
import hot from "./components/game_info/hot";
import totalwar from "./components/game_info/totalwar";
import saber from "./components/game_info/saber";
import dirt from "./components/game_info/dirt";
import forza from "./components/game_info/forza";
import nfs from "./components/game_info/nfs";
import little from "./components/game_info/little";
import stardew from "./components/game_info/stardew";
import hades from "./components/game_info/hades";
import siro from "./components/game_info/siro";
import wow from "./components/game_info/wow";
import knight from "./components/game_info/knight";
import ageof from "./components/game_info/ageof";
import company from "./components/game_info/company";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class GamesPage extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/game_page/gta" component={gta} />
          <Route path="/game_page/witcher" component={witcher} />
          <Route path="/game_page/mafia" component={mafia} />
          <Route path="/game_page/Rainbow" component={Rainbow} />
          <Route path="/game_page/coldwar" component={coldwar} />
          <Route path="/game_page/nba" component={nba} />
          <Route path="/game_page/fifa" component={fifa} />
          <Route path="/game_page/nfl" component={nfl} />
          <Route path="/game_page/cs" component={cs} />
          <Route path="/game_page/alyx" component={alyx} />
          <Route path="/game_page/hot" component={hot} />
          <Route path="/game_page/saber" component={saber} />
          <Route path="/game_page/ageof" component={ageof} />
          <Route path="/game_page/company" component={company} />
          <Route path="/game_page/totalwar" component={totalwar} />
          <Route path="/game_page/dirt" component={dirt} />
          <Route path="/game_page/forza" component={forza} />
          <Route path="/game_page/hades" component={hades} />
          <Route path="/game_page/knight" component={knight} />
          <Route path="/game_page/little" component={little} />
          <Route path="/game_page/siro" component={siro} />
          <Route path="/game_page/stardew" component={stardew} />
          <Route path="/game_page/wow" component={wow} />
          <Route path="/game_page/nfs" component={nfs} />
        </Switch>
      </Router>
    );
  }
}

export default GamesPage;
