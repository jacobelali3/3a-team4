import React, { Component } from "react";
import "../App.css";
import "./news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  componentDidMount() {
    const url = 'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?' +
    'q=covid 19 sydney&' +
     'qInTitle=covid' +
    'from=2020-09-07&' +
    'sortBy=relevancy&' +
    'apiKey=93fa47f73b0544e2a927b0a0d8d6db98';
    const req = new Request(url);
    const newsList = document.querySelector('.news-list');
    fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data)
       data.articles.forEach(article =>{
           let li = document.createElement('li');
           let a = document.createElement('a');
           let b = document.createElement('img');
           a.setAttribute('href', article.url);
           a.setAttribute('target', '_blank')
           b.setAttribute('src', article.urlToImage);
           b.setAttribute('alt', 's');
           b.setAttribute('width', '100');
           b.setAttribute('height', '100');
           b.setAttribute('class', 'centre');
           a.textContent = article.title;
           li.appendChild(a);
           li.appendChild(b);
           newsList.appendChild(li);
           
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
