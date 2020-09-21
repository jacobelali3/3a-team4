import React, { Component } from "react";
import "../App.css";
import "table.css";


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
  }
  

  componentDidMount() {
    const url = 'https://data.nsw.gov.au/data/api/3/action/datastore_search?resource_id=21304414-1ff1-4243-a5d2-f52778048b29&limit=5';
    const req = new Request(url);
    const tableList = document.querySelector('.table-list');
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data)
       data.result.forEach(results =>{
           let li = document.createElement('li');
           let a = document.createElement('a');
           a.textContent = results.records.postcode;
           li.appendChild(a);
           tableList.appendChild(li);
           
           
           /*var img = new Image(); 
           img.setAttribute('href', article.url);
            img.src =  article.urlToImage; 
            document.getElementById('body').appendChild(img); */

           
        })
            
        });
  
}
    render(){
       return(
           <div>
               <h1>Table</h1>
        <div 
        class="container"> 
        <ul class="table-list"></ul>
        
        </div>
        </div>
       );
      }
}
export default Table;
