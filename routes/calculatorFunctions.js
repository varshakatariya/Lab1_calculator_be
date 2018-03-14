var express = require('express');
var router = express.Router();
//var fs = require('fs');
var path = require('path');
var number1 = './routes/';
var number2 = './routes/';
var operator = './routes/';
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    var response = {result:""};

    number1 = Number(req.param('number1'));
    number2 = Number(req.param('number2'));
    operator = req.param('operator');

    console.log("Inside node JS :: operator " + operator);
    console.log("Inside node JS Number 1 :: n1 " + number1);
    console.log("Inside node JS Number 2:: n2 " + number2);

    if(operator == "add"){
        response.result = (number1 + number2).toString();
    }else if(operator == "sub"){
        response.result = (number1 - number2).toString();
    }else if(operator == "mult"){
        response.result = (number1 * number2).toString();
    }else if(operator == "div"){
        response.result = (number1 / number2).toString();
    }
    res.send(response);

});

app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001')
})

module.exports = app;