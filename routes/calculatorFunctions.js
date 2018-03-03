var express = require('express');
var router = express.Router();
//var fs = require('fs');
var number1 = './routes/';
var number2 = './routes/';
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
app.get('/add', function(req,res)
{
    console.log("inside add")
    var response = {result:""};

    number1 = Number(req.param('number1'));
    number2 = Number(req.param('number2'));

    response.result = (number1 + number2).toString();

    res.send(response);

});
console.log("inside Rest");
app.get('/sub', function(req,res)
{
    var response = "";
console.log("inside sub")
    number1 = Number(req.param('number1'));
    number2 = Number(req.param('number2'));

    response = (number1 - number2).toString();
    res.send(response);

});
/*app.get('/mult', function(req,res)
{
    var response = "";

    number1 = Number(req.param('number1'));
    number2 = Number(req.param('number2'));

    response = (number1 * number2).toString();
    res.send(response);

});
app.get('/div', function(req,res)
{
    var response = "";

    number1 = Number(req.param('number1'));
    number2 = Number(req.param('number2'));

    response = (number1 / number2).toString();
    res.send(response);

});*/
app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001')
})


module.exports = router;