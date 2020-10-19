import React, { Component, useMemo} from "react";
import "../App.css";
import { useTable } from 'react-table';
import moment from 'moment';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        
  }
  
  
 
  componentDidMount() {
    var date = moment().subtract(2, "days").format("YYYY-MM-DD");
    var dateCurr = moment().format("YYYY-MM-DD");
    const url = "https://api.covid19api.com/country/australia/status/confirmed?from=" + date + 
    "T00:00:00Z&to=" + dateCurr + "T00:00:00Z";
    const req = new Request(url);
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{
        console.log(data);
    this.setState({data: data})
    })
    
 
  }
    render(){
     return(  
       <div></div>
    )
  }
 
       
}
export default Table;
