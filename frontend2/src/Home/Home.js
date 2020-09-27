import React, { Component } from "react";
import "../App.css";
import "./home.css";
import dna from "./dna.png";
import hospital from "./hospital.png";
import unknown from "./marketing.png";
import doctor from "./doctor.png";
import arrow from "./arrow.png";
import sanitise from "./sanitise.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
    <div class="header" style={{ marginTop: "10vh" }}>
      <h1>Today's NSW News</h1>
    </div>
    <div class="home-row">
      <div class="home-col">
      <img src={dna} height="50"></img>
      <p>20 Active Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={hospital} height="50"></img>
      <p>3 New Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={unknown} height="50"></img>
      <p>0 Unknown Sources</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={doctor} height="50"></img>
      <p>20,000 Cases</p>
      <a href="/News"><img class="arrow" src={arrow} height="30"></img></a>
      </div>
    </div>
    <div class="second">
      <div class="second-image">
      <img src={sanitise} height="500"></img>
      </div>
      <div class="second-text">
      <h3>HOW TO STAY SAFE IN PUBLIC</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </div>
    </div>
    </div>
    )
  }
}

export default Home;
