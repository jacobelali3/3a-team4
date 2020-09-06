import React, { Component } from "react";
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
                style={{ width: "100%", "flexGrow": "0" }}
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

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="./news.html"
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
            
            
          </header>
        </div>
      </div>
    );
  }
}

export default App;
