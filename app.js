const express   = require('express');
const nunjucks  = require('nunjucks');
const request = require('request');

const app       = express();
var apiData ;


request('https://api.ethnews.com/v1/articles', function (error, response, body) {
    apiData = JSON.parse(body);
});

  
nunjucks.configure('views', {
    autoescape: true,
    express   : app
  });
app.get('/',(req,res,next) => {
    res.render('index.html', {
        title : "Block Chain Assesment",
        items : [apiData]
      });
});

app.listen(3000);