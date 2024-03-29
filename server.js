const express = require('express');
const app = express();
const hbs = require('hbs');


app.use( express.static( __dirname + '/public'));
//Express HBS engine
hbs.registerPartials( __dirname +'/views/partials' );
app.set('view engine', 'hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.render('home',{
      nombre:'Edwin roquet flores'
  });
   
});
app.get('/about', (req, res) => {

    res.render('about');
     
  });
 
app.listen(port, ()=>{
   console.log(`Escuchando desde el puerto ${ port }`);
});