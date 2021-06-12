import React, { Component } from "react";
import HomePage from "./HomePage";
import gta from "../assets/gta.jpg";
import dirt from "../assets/dirt.jpg";
import siro from "../assets/siro.jpg";
import { Container, Row } from "react-bootstrap";
import { gamedata } from "./data";

class HomePage1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <ul className="list-unstyled">
            <HomePage
              title={this.getTitle("gta")}
              image={gta}
              publisher={this.getPublisher("gta")}
              maingame={this.getGame("gta")}
            />
            <HomePage
              title={this.getTitle("siro")}
              image={siro}
              publisher={this.getPublisher("siro")}
              maingame={this.getGame("siro")}
            />
            <HomePage
              title={this.getTitle("dirt")}
              image={dirt}
              publisher={this.getPublisher("dirt")}
              maingame={this.getGame("dirt")}
            />
          </ul>
        </Container>
      </React.Fragment>
    );
  }

  getPublisher(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.publisher;
    });
  }

  getGame(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.home_desc;
    });
  }
  getTitle(name) {
    return gamedata.map((data) => {
      if (data.name === name) return data.title;
    });
  }
}

export default HomePage1;
