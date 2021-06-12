import React, { Component } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import GameInfo from "../GameInfo";
import { gamedata } from "../data";

class nfl extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <GameInfo
          title={this.getTitle("nfl")}
          publisher={this.getPublisher("nfl")}
          description={this.getDesc("nfl")}
          info={this.getInfo("nfl")}
          instructions={this.getInstructions("nfl")}
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

export default nfl;
