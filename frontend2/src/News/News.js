import React, { Component } from "react";
import Card from './Card'
import "../App.css";

import Grid from '@material-ui/core/Grid';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>News
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default News;
