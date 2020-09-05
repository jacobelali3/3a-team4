import React, { Component } from "react";
import "../App.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({apiKey: "AIzaSyB9txFFascb8Jcj8qV6ET2mtXZtwqqzMiU",})(Maps);
