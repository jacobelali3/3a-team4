import React, { Component } from "react";
import "../App.css";



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
  }
  

  componentDidMount() {
    const url = 'https://api.covid19api.com/summary';
    const req = new Request(url);
    const tableList = document.querySelector('.table-list');
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data);
       data.Countries.forEach(Countries =>{
           let li = document.createElement('li');
           let a = document.createElement('a');
           let b = document.createElement('a');
           a.textContent = Countries.TotalConfirmed;
           b.textContent = Countries.Country;
           li.appendChild(a);
           li.appendChild(b);
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
