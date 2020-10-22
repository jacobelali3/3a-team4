import React, { Component } from "react";
import "../App.css";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = { distance: 0 };
  }

  handleChange = (event) => {
    this.setState({ distance: event.target.value });
  };

  render() {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Grid container spacing={3} style={{ margin: "1vw" }}>
          <Grid item xs={12} md={3}></Grid>

          <Grid item xs={12} md={3}>
            <InputLabel id="latitude">Latitude</InputLabel>
            <TextField
              label="Dense"
              id="outlined-margin-dense"
              defaultValue="0.0"
              margin="dense"
            
            />

            <InputLabel style={{ fontSize: "10px" }}>
              Click on the map to obtain a lat and a long then click Report!
            </InputLabel>
          </Grid>

          <Grid item xs={12} md={3}>
            <InputLabel id="longitude">Longitude</InputLabel>
            <TextField
              label="Dense"
              id="outlined-margin-dense"
              defaultValue="0.0"
              margin="dense"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={3} style={{alignItems:"center", display:"flex"}}>
            <Button variant="contained" color="primary">
              Report Covid Case
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ margin: "1vw" }}>
          <Grid item xs={12} md={3}></Grid>

          <Grid item xs={12} md={3}></Grid>

          <Grid item xs={12} md={3}>
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
              <MenuItem value={20}>20km</MenuItem>
              <MenuItem value={30}>30km</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={3}style={{alignItems:"flex-end", display:"flex"}}>
            <Button variant="contained" color="primary">
              Filter
            </Button>
          </Grid>
        </Grid>

        <div>
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9txFFascb8Jcj8qV6ET2mtXZtwqqzMiU",
})(Maps);
