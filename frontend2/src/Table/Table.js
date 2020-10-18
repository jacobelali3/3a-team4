import React, { Component, useState, useEffect } from "react";
import "../App.css";
import moment from "moment";


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { tableList: [] };
  }
  

  componentDidMount() {
    var date = moment().subtract(10, "days").format("YYYY-MM-DD");
    var dateCurr = moment().format("YYYY-MM-DD");
    const url = "https://api.covid19api.com/country/australia/status/confirmed?from=" + date + 
    "T00:00:00Z&to=" + dateCurr + "T00:00:00Z";
    const req = new Request(url);
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data);
       
        })
            
        
  
}
    render(){
       return(
           
               <h1>Table</h1>
        
       );
      }
}

export default Table;
