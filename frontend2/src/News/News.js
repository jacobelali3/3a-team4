import React, { Component } from "react";
//import Card from './Card'
import "../App.css";

import Grid from '@material-ui/core/Grid';
import { Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Link, Typography, CardHeader } from "@material-ui/core";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardItems: [
        {
          id: 1,
          title: "News Article",
          img: "https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "http://www.google.com",
        },
        {
          id: 2,
          title: "2News Article",
          img: "https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg",
          description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "http://www.yahoo.com",
        },
        {
          id: 3,
          title: "3News Article",
          img: "https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg",
          description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "http://www.twitter.com",
        },
        {
          id: 4,
          title: "4News Article",
          img: "https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg",
          description: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "http://www.bing.com",
        },
        {
          id: 5,
          title: "5News Article",
          img: "https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg",
          description: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          link: "https://online.uts.edu.au/webapps/login/",
        },
      ],
    };
  }

  render() {
    return (
      <div>News
        <Grid container spacing = {4} style={{padding: 24}}>
          {this.state.cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card style={{minWidth: 285}}>                
                <CardActionArea onClick={() => window.open(item.link)}>
                  <CardMedia 
                    componenet="img" 
                    image={item.img} 
                    title={item.title}
                    style={{height: 0, paddingTop: '50%'}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default News;
