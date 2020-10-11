import React, { Component } from "react";
import "../App.css";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      currentLatLng: {
        lat: 0,
        lng: 0,
        zoom: 15,
      },
      readyMap: false,
    };

    this.createTask = this.createTask.bind(this);
  }

  componentDidMount() {
    this.delayedShowMarker();
    // this.createTask();
  }

  componentWillUpdate() {
    this.getGeoLocation();
  }

  handleChange = (event) => {
    let distance = event.target.value;
    this.setState({ distance: distance });

    if (distance == 10) {
      this.setState({ zoom: 13 });
    } else if (distance == 30) {
      this.setState({ zoom: 12 });
    } else if (distance == 50) {
      this.setState({ zoom: 11 });
    } else {
      this.setState({ zoom: 15 });
    }
  };

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation();
    }, 5000);
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          this.setState((prevState) => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            readyMap: true,
          }));
        },
        function error(msg) {
          alert(msg);
          this.setState({ readyMap: true });
        },
        { enableHighAccuracy: true }
      );
    } else {
    }
  };

  createTask() {
    axios
      .post(
        "/createTask"
        // , {
        //   name: "Dasdasdasd",
        //   title: "Dasdasdasd",
        //   description: "Dasdasdasd",
        // }
      )
      .then(
        (res) => {
          alert("Create Task Successful", res);
        },
        (error) => {
          alert("Create Task Error", error);
        }
      );
  }

  render() {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Grid container spacing={3} style={{ margin: "1vw" }}>
          <Grid item container xs={12} md={9} className="gridCenterItem">
            <Grid
              item
              xs={12}
              md={3}
              className="gridCenterItem"
              style={{ marginRight: "1vw" }}
            >
              <InputLabel id="latitude">Latitude</InputLabel>
              <TextField
                label="Dense"
                id="outlined-margin-dense"
                defaultValue="0.0"
                margin="dense"
                variant="outlined"
                fullWidth={true}
              />

              <InputLabel style={{ fontSize: "10px" }}>
                Click on the map to obtain a lat and a long then click Report!
              </InputLabel>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              className="gridCenterItem"
              style={{ marginRight: "1vw" }}
            >
              <InputLabel id="longitude">Longitude</InputLabel>
              <TextField
                label="Dense"
                id="outlined-margin-dense"
                defaultValue="0.0"
                margin="dense"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              style={{ alignItems: "center", display: "flex" }}
            >
              <Button variant="contained" color="primary">
                Report Covid Case
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} className="gridCenterItem">
            <Grid item xs={12} md={12} className="gridCenterItem">
              <InputLabel id="demo-simple-select-outlined-label">
                Distance
              </InputLabel>
              <Select
                id="demo-simple-select-outlined"
                variant="outlined"
                value={this.state.distance}
                onChange={this.handleChange}
                style={{ minWidth: "12vw" }}
                margin="dense"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10km</MenuItem>
                <MenuItem value={30}>30km</MenuItem>
                <MenuItem value={50}>50km</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>

        <div>
          {this.state.readyMap ? (
            <Map
              google={this.props.google}
              zoom={this.state.zoom}
              style={mapStyles}
              initialCenter={{
                lat: this.state.currentLatLng.lat,
                lng: this.state.currentLatLng.lng,
              }}
            >
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"SOMA"}
                position={this.state.currentLatLng}
              />

              <InfoWindow position={this.state.currentLatLng} visible>
                <small>Current Location </small>
              </InfoWindow>
            </Map>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9txFFascb8Jcj8qV6ET2mtXZtwqqzMiU",
})(Maps);
