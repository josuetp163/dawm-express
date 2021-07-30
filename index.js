var express = require('express');
var app = express();
let ejs = require('ejs');
var path = require('path');
const bodyParser = require("body-parser");


app.listen(3000, () =>{
    console.log("Server on port 3000")
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Welcome to the api');
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

var testsRouter = require('./routes/tests');

app.use('/tests',testsRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//For wiews
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;