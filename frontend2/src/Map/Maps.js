import React, { Component } from "react";
import "../App.css";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  HeatMap,
} from "google-maps-react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)",
];

const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
};

let position = [];

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
      clickedMarker: {
        lat: 0,
        lng: 0,
        zoom: 15,
      },
      open: false,
      readyMap: false,
      positions: [],
      finishPos: false,
      reportedCovidCases: [],
    };

    this.mapClicked = this.mapClicked.bind(this);

    this.getCovidCases = this.getCovidCases.bind(this);

    this.reportCovidCase = this.reportCovidCase.bind(this);
    this.getReportedCovidCases = this.getReportedCovidCases.bind(this);
  }

  componentDidMount() {
    this.delayedShowMarker();
    this.getCovidCases();
    this.getReportedCovidCases();
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

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
    }, 2000);

    setTimeout(() => {}, 2000);
  };

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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
      alert("Get current location error");
    }
  };

  getCovidCases() {
    const req = new Request(
      "https://api.covid19api.com/live/country/aus/status/confirmed"
    );
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let pos = [];

        {
          data.map((item, index) =>
            position.push({
              lat: parseFloat(item.Lat),
              lng: parseFloat(item.Lon),
            })
          );
        }

        console.log(position);
      });
  }

  reportCovidCase() {
    axios
      .post("/reportCovidCase", {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        mobile: document.getElementById("mobile").value,
        lat: this.state.clickedMarker.lat,
        lng: this.state.clickedMarker.lng,
      })
      .then(
        (res) => {
          alert("Create Covid Case Successful", res);
          this.setState({ readyMap: false });

          this.delayedShowMarker();
          this.getCovidCases();
          this.getReportedCovidCases();
        },
        (error) => {
          alert("Create Covid Error", error);
        }
      );

    this.toggleModal();
  }

  getReportedCovidCases() {
    axios.get("/getReportedCases").then(
      (res) => {
        this.setState({ reportedCovidCases: res.data });
      },
      (error) => {
        alert("GET REPORTED CASES FAILED", error);
      }
    );
  }

  mapClicked(mapProps, map, clickEvent) {
    console.log("CLICKEVENT", clickEvent.latLng.lat(), clickEvent.latLng.lng());
    this.setState({
      clickedMarker: {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng(),
      },
    });
  }

  render() {
    console.log("", position);

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
                value={this.state.clickedMarker.lat}
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
                margin="dense"
                variant="outlined"
                fullWidth={true}
                value={this.state.clickedMarker.lng}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              style={{ alignItems: "center", display: "flex" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={this.toggleModal}
              >
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
              className="map"
              style={{ height: "100%", position: "relative", width: "100%" }}
              google={this.props.google}
              zoom={this.state.zoom}
              style={mapStyles}
              initialCenter={{
                lat: this.state.currentLatLng.lat,
                lng: this.state.currentLatLng.lng,
              }}
              onClick={this.mapClicked}
            >
              <Marker
                label={"Current Location"}
                name={"Current Location"}
                position={this.state.currentLatLng}
              />

              <Marker
                label={"Report Case"}
                name={"Report Case"}
                position={this.state.clickedMarker}
              />

              <HeatMap
                gradient={gradient}
                opacity={0.3}
                positions={position}
                radius={20}
              />

              <HeatMap
                gradient={gradient}
                opacity={0.3}
                positions={this.state.reportedCovidCases}
                radius={20}
              />
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

        <Dialog
          open={this.state.open}
          onClose={this.toggleModal}
          aria-labelledby="responsive-dialog-title"
          fullWidth={true}
          maxWidth="sm"
        >
          <DialogTitle
            id="responsive-dialog-title"
            style={{ textAlign: "center" }}
          >
            Report Covid Case
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={5} style={{ padding: 50 }}>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  id="first_name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  id="last_name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Contact Number"
                  id="mobile"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.reportCovidCase}
                >
                  Report
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9txFFascb8Jcj8qV6ET2mtXZtwqqzMiU",
  libraries: ["visualization"],
})(Maps);
