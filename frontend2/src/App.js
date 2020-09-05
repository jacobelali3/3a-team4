import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false,
      style_global_color: {
        color: "#FFFFFF",
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
            style={{ backgroundColor: "#000080" }}
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
                      href="/Home"
                    >
                      Home
                    </a>
                  </li>

                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/Maps"

                    >
                      Maps
                    </a>
                  </li>

                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/News"

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

        <div>



        </div>
      </div>
    );
  }
}

export default App;
