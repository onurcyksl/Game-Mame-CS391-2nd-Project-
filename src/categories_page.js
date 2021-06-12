import React, { Component } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import gta from "./assets/gta.jpg";
import witcher from "./assets/witcher.jpg";
import mafia from "./assets/mafia.jpg";
import fifa from "./assets/fifa.jpg";
import nba from "./assets/nba.jpg";
import dirt from "./assets/dirt.jpg";
import forza from "./assets/forza.jpg";
import hades from "./assets/hades.jpg";
import knight from "./assets/knight.jpg";
import little from "./assets/little.jpg";
import nfs from "./assets/nfs.jpg";
import siro from "./assets/siro.jpg";
import stardew from "./assets/stardew.png";
import wow from "./assets/wow.jpg";
import coldwar from "./assets/coldwar.jpg";
import r6 from "./assets/r6.jpg";
import nfl from "./assets/nfl.jpg";
import csgo from "./assets/csgo.jpg";
import alyx from "./assets/alyx.jpg";
import hot from "./assets/hot.jpg";
import saber from "./assets/saber.jpg";
import company from "./assets/company.jpg";
import totalwar from "./assets/totalwar.jpg";
import ageof from "./assets/ageof.jpg";
import "./index.css";

class CategoriesPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div class="row">
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              FPS
            </h1>
            <Category
              path1="/game_page/coldwar"
              img1={coldwar}
              title1="Call Of Duty: Cold War"
              desc1={this.getDesc("Cold War")}
              path2="/game_page/Rainbow"
              img2={r6}
              title2="Rainbow Six Siege"
              desc2={this.getDesc("r6")}
              path3="/game_page/cs"
              img3={csgo}
              title3="Counter Strike: Global Offensive"
              desc3={this.getDesc("csgo")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Sports
            </h1>
            <Category
              path1="/game_page/fifa"
              img1={fifa}
              title1="FIFA 2021"
              desc1={this.getDesc("fifa")}
              path2="/game_page/nba"
              img2={nba}
              title2="NBA 2K21"
              desc2={this.getDesc("nba")}
              path3="/game_page/nfl"
              img3={nfl}
              title3="Madden NFL 2021"
              desc3={this.getDesc("nfl")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              RPG
            </h1>
            <Category
              path1="/game_page/gta"
              img1={gta}
              title1="Grand Theft Auto 5"
              desc1={this.getDesc("gta")}
              path2="/game_page/witcher"
              img2={witcher}
              title2="Witcher 3"
              desc2={this.getDesc("witcher")}
              path3="/game_page/mafia"
              img3={mafia}
              title3="Mafia 2 Definitive Edition"
              desc3={this.getDesc("mafia")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              VR
            </h1>
            <Category
              path1="/game_page/alyx"
              img1={alyx}
              title1="Half Life : Alyx"
              desc1={this.getDesc("alyx")}
              path2="/game_page/hot"
              img2={hot}
              title2="SUPERHOT"
              desc2={this.getDesc("hot")}
              path3="/game_page/saber"
              img3={saber}
              title3="Beat Saber"
              desc3={this.getDesc("saber")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Strategy
            </h1>
            <Category
              path1="/game_page/totalwar"
              img1={totalwar}
              title1="Total War : Rome II"
              desc1={this.getDesc("totalwar")}
              path2="/game_page/ageof"
              img2={ageof}
              title2="Age of Empires : Definitive Edition"
              desc2={this.getDesc("ageof")}
              path3="/game_page/company"
              img3={company}
              title3="Company of Heroes 2"
              desc3={this.getDesc("company")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              MMORPG
            </h1>
            <Category
              path1="/game_page/siro"
              img1={siro}
              title1="Silkroad Online"
              desc1={this.getDesc("siro")}
              path2="/game_page/wow"
              img2={wow}
              title2="World of Warcraft"
              desc2={this.getDesc("wow")}
              path3="/game_page/knight"
              img3={knight}
              title3="Knight Online"
              desc3={this.getDesc("knight")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Indie
            </h1>
            <Category
              path1="/game_page/little"
              img1={little}
              title1="Little Nightmares 2"
              desc1={this.getDesc("little")}
              path2="/game_page/hades"
              img2={hades}
              title2="HADES"
              desc2={this.getDesc("hades")}
              path3="/game_page/stardew"
              img3={stardew}
              title3="Stardew Valley"
              desc3={this.getDesc("stardew")}
            />
          </div>
          <div class="col-3">
            <h1
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Racing
            </h1>
            <Category
              path1="/game_page/nfs"
              img1={nfs}
              title1="Need for Speed: Heat"
              desc1={this.getDesc("nfs")}
              path2="/game_page/forza"
              img2={forza}
              title2="Forza Horizon 4"
              desc2={this.getDesc("forza")}
              path3="/game_page/dirt"
              img3={dirt}
              title3="Dirt 4"
              desc3={this.getDesc("dirt")}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  getDesc(game) {
    if (game === "gta") return "Action Adventure, Modern, Open-World";
    else if (game === "mafia") return "Action Adventure, Open-World";
    else if (game === "siro")
      return "Role-Playing, Massively Multiplayer Online, Massively Multiplayer, Fantasy";
    else if (game === "wow")
      return "Role-Playing, Massively Multiplayer Online, Massively Multiplayer, Fantasy";
    else if (game === "stardew") return "Roleplaying, General";
    else if (game === "nfs") return "Racing, Arcade, Automobile";
    else if (game === "dirt") return "Racing, Simulation, Automobile";
    else if (game === "forza") return "Racing, Simulation, Automobile";
    else if (game === "hades") return "Action Adventure, General, Linear";
    else if (game === "little") return "Action Adventure, Linear";
    else if (game === "knight")
      return "Role-Playing, Massively Multiplayer Online, Massively Multiplayer, Fantasy";
    else if (game === "alyx")
      return "Action, First-Person, Shooter, Arcade, VR";
    else if (game === "hot")
      return "Modern, Action, First-Person, Shooter, Tactical, VR";
    else if (game === "saber") return "Action, General, VR";
    else if (game === "ageof")
      return "Strategy, Real-Time, Command, Historic";
    else if (game === "totalwar")
      return "Strategy, Real-Time, Command, Historic, General";
    else if (game === "company")
      return "Strategy, Real-Time, Command, Historic, General";
    else if (game === "witcher") return "Action RPG, Role-Playing";
    else if (game === "fifa") return "Sports, Team, Soccer, Sim";
    else if (game === "nba") return "Sports, Team, Basketball, Arcade";
    else if (game === "Cold War")
      return "Action, Shooter, First-Person, Tactical";
    else if (game === "r6")
      return "Modern, Action, Shooter, First-Person, Tactical";
    else if (game === "nfl") return "Sports, Team, Football, Sim";
    else if (game === "csgo")
      return "Action, Shooter, Shooter, First-Person, Modern, Tactical, Modern";
    else return "";
  }
}

export default CategoriesPage;
