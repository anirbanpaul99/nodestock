// stock market app created by anirban

const express = require('express');
const app = express();

var exphbs = require('express-handlebars');

const path = require('path');

const PORT = process.env.PORT || 5000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars'); 

const newstuff = "This is completely different";

app.get('/', function (req, res) {
res.render('home', { stuff:  newstuff} );
}); 

app.use(express.static(path.join(__dirname, 'public')));

app.listen (PORT, () => console.log('Server listening on port ' + PORT)); 