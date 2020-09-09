import React, { Component } from "react";
import "../App.css";
import "./news.css";
import moment from "moment";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  componentDidMount() {
     var date = moment().subtract(7, 'days').format('YYYY-M-D')
     
    const url = 'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?' +
    'qInTitle="covid" AND ("australia" OR "Sydney" OR "nsw" OR "victoria")&' +
    'from=' + date + '&'+
    'sortBy=publishedAt&' +
    'source=au&' +
    'language=en&' +
    'apiKey=93fa47f73b0544e2a927b0a0d8d6db98';
    const req = new Request(url);
    const newsList = document.querySelector('.news-list');
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data)
       data.articles.forEach(article =>{
           let li = document.createElement('li');
           let a = document.createElement('a');
           let b = document.createElement('img');
           let c = document.createElement('p');
           let d = document.createElement('hr');
           a.setAttribute('href', article.url);
           a.setAttribute('target', '_blank')
           b.setAttribute('src', article.urlToImage);
           b.setAttribute('alt', '');
           b.setAttribute('width', '400');
           b.setAttribute('height', '200');
           
           a.textContent = article.title;
           c.textContent = article.description
           li.appendChild(a);
          
           
           
           newsList.appendChild(li);
           newsList.appendChild(b);
           newsList.appendChild(c);
           newsList.appendChild(d);
           /*var img = new Image(); 
           img.setAttribute('href', article.url);
            img.src =  article.urlToImage; 
            document.getElementById('body').appendChild(img); */

           
        })
            
        });
  }


  render() {
    return (
      
   <div> 
      
      <div> 
      
      <h1>Today's COVID News </h1>
      </div>
      
      <div 
      class="container"> 
      <ul class="news-list"></ul>
      
      </div>


      </div>

    );
  }

  }

export default News;
