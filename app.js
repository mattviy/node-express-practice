var express = require('express')
var app = express()
var path = require("path")
var hbs = require("hbs")
var exphbs = require('express-handlebars')

var index = require('./routes/index');
var about = require('./routes/about');
var team = require('./routes/team');



//change default view engine to bhs instead of .html
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

//middleware that connects the routes
app.use(express.static('public'));

app.use('/', index);
app.use('/about', about);
app.use('/team', team);

app.listen(3000, function(){
    console.log("listening")
})