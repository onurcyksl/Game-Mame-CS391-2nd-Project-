import React, { Component } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import GameInfo from "../GameInfo";
import { gamedata } from "../data";

class nba extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <GameInfo
          title={this.getTitle("nba")}
          publisher={this.getPublisher("nba")}
          description={this.getDesc("nba")}
          info={this.getInfo("nba")}
          instructions={this.getInstructions("nba")}
        />
        <Footer />
      </React.Fragment>
    );
  }

  getTitle(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.title;
    });
  }

  getPublisher(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.publisher;
    });
  }

  getDesc(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.description;
    });
  }

  getInfo(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.info;
    });
  }

  getInstructions(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.instructions;
    });
  }
}

export default nba;
