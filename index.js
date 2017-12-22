var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));


// routes
app.get('/', function(req, res) {
  res.render('index');
});


// controller
app.use('/teams', require('./controllers/teams'));






app.listen(3000);
