import "./GameInfo.css";
import React, { Component } from "react";
import DualS from "../assets/info.png";


class GameInfo extends Component {
  state = {};
  render() {
    return (
      <body onload="getGame();">
        <div class="pagetitle">
          <p id="name" class="game_name" style={{ color: "white" }}>
            {this.props.name}
          </p>

          <h1 id="title" class="game_title">
            {this.props.title}
          </h1>

          <h3 id="publisher" class="publisher">
            <i>{this.props.publisher}</i>
          </h3>
        </div>

        <div id="content">
          <p
            id="description"
            class="description"
            style={{ color: "rgb(83, 88, 94)" }}
          >
            {this.props.description}
          </p>
        </div>

        <div id="div_info">
          <h2>
            <img class="dual_icon" src={DualS} /> General Information
          </h2>
          <p id="info" class="info" style={{ color: "rgb(83, 88, 94)" }}>
            {this.props.info}
          </p>
        </div>
      </body>
    );
  }
}

export default GameInfo;


