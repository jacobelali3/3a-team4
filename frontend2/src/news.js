
var url = 'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?' +
          'q=covid 19&' +
           'q=australia' +
           'qInTitle=covid' +
          'from=2020-09-06&' +
          'sortBy=relevancy&' +
          'apiKey=93fa47f73b0544e2a927b0a0d8d6db98';

var req = new Request(url);
const newsList = document.querySelector('.news-list');


fetch(req)
    .then((response)=> {return response.json()}).then((data)=>{console.log(data)
       data.articles.forEach(article =>{
           let li = document.createElement('li');
           let a = document.createElement('a');
           a.setAttribute('href', article.url);
           a.setAttribute('target', '_blank')
           a.textContent = article.title;
           li.appendChild(a);
           newsList.appendChild(li);
           /*var img = new Image(); 
           img.setAttribute('href', article.url);
            img.src =  article.urlToImage; 
            document.getElementById('body').appendChild(img); */

           
        })
            
        });
    