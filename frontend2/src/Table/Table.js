import React, { Component, useMemo} from "react";
import "../App.css";
import { Table } from '@material-ui/core';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Tablee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            
        };
        
  }
  
  
 
  componentDidMount() {
    var date = moment().subtract(2, "days").format("YYYY-MM-DD");
    var dateCurr = moment().subtract(1, "days").format("YYYY-MM-DD");
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
        <TableContainer component={Paper}>
      <Table size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align= "inherit">State</TableCell>
            <TableCell align="right">Cases&nbsp;</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map((data) => (
            <TableRow key={data.Province}>
              <TableCell component="th" scope="row">
                {data.Province}
              </TableCell>
              <TableCell align="right">{data.Cases}</TableCell>
              <TableCell align="right">{data.Date}</TableCell>
              <TableCell align="right">{data.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    );
  }
 
       
}
export default Tablee;
