import React, { Component } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import GameInfo from "../GameInfo";
import { gamedata } from "../data";

class totalwar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <GameInfo
          title={this.getTitle("totalwar")}
          publisher={this.getPublisher("totalwar")}
          description={this.getDesc("totalwar")}
          info={this.getInfo("totalwar")}
          instructions={this.getInstructions("totalwar")}
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

export default totalwar;
