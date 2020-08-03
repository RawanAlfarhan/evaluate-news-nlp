const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "50606da7",
  application_key: "912c120ae2c55c7f19dcc89ea24eb3ea"
});
/*
// Require the Aylien npm package
var aylienAPI = require('aylien_textapi')

//Api credentials
var textapi = new aylienAPI({
    application_id: "00d7c105",
    application_key: "a6fe41f54caac54007ef2802385ff05b"
});

*/

const app = express()

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
app.post('/testing', function (req, res) {
    textapi.sentiment({
      'url': req.body.text
  }, function(error, response) {
       if(!error){
       console.log(response);
       res.send(response);}
    
  });
});




