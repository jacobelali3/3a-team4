import React, { Component, useState } from "react";
import "../App.css";
import "./home.css";
import dna from "./dna.png";
import hospital from "./hospital.png";
import unknown from "./marketing.png";
import doctor from "./doctor.png";
import arrow from "./arrow.png";
import sanitise from "./sanitise.jpg";
import moment from 'moment';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      TotalCases: 0,
      NewCases: 0,
      NewRecovered: 0,
      TotalDeaths: 0,
      TotalRecovered: 0,
      ActiveCases: 0

    };
  }
  componentDidMount() {
    const url = "https://api.covid19api.com/summary"
    const req = new Request(url);
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{
        console.log(data);
        const select = 8;
    this.setState({data: data});
    this.setState({TotalCases: data.Countries[select].TotalConfirmed});
    this.setState({TotalDeaths: data.Countries[select].TotalDeaths});
    this.setState({TotalRecovered: data.Countries[select].TotalRecovered});
    this.setState({NewCases: data.Countries[select].NewConfirmed});
    this.setState({NewRecovered: data.Countries[select].NewRecovered}); 
    this.setState({ActiveCases: this.state.TotalCases - (this.state.TotalDeaths + this.state.TotalRecovered)}); 

    
    })

  }

  render() {
    const healthlink = 'https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert'

    return (
    <div>
    <div class="header" style={{ marginTop: "10vh" }}>
      <h1>Covid Summary Australia</h1>
    </div>
    <div class="home-row">
      <div class="home-col">
      <img src={dna} height="50"></img>
    <p>Active Cases {this.state.ActiveCases}</p>
      <a href={healthlink}><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={hospital} height="50"></img>
    <p>New Recovered {this.state.NewRecovered}</p>
      <a href={healthlink}><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={unknown} height="50"></img>
      <p>Total Confirmed {this.state.TotalCases}</p>
      <a href={healthlink}><img class="arrow" src={arrow} height="30"></img></a>
      </div>
      <div class="home-col">
      <img src={doctor} height="50"></img>
    <p>New Cases {this.state.NewCases}</p>
      <a href={healthlink}><img class="arrow" src={arrow} height="30"></img></a>
      </div>
    </div>
    <div class="second">
      <div class="second-image">
      <img src={sanitise} height="500"></img>
      </div>
      <div class="second-text">
      <h3>HOW TO STAY SAFE IN PUBLIC</h3>
      <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
      <p>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</p>
      <p>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COVID-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</p>
      <p>WHO 2020</p>
      </div>
    </div>
    </div>
    )
  }
}

export default Home;
