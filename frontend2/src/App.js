import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false,
      style_global_color: {
        color: "#61b329",
      },
    };
  }

  render() {
    return (
      <div>
        <div>
          <nav
            class="navbar navbar-expand-lg fixed-top navbar-light"
            id="mainNav"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div class="container">
              <div
                class="collapse navbar-collapse"
                id="navbarResponsive1"
                style={{ width: "100%", "flex-grow": "0" }}
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                    >
                      Maps
                    </a>
                  </li>

                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>

            
              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive1"
                aria-controls="navbarResponsive1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>

        <div className="App">
          <header className="App-header">
            
            
            <img src="microphone.png" alt="Italian Trulli" width = "200" height = "100" ></img>
            <button type="button">Click here to ask for corona stats!</button>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
