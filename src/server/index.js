const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
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
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
/*
app.post('/test', function(req, res){
    textapi.sentiment({
        "text": "i'm strong"
      }, function(error, res) {
        if (error === null) {
          console.log(res);
          res.send(res)
        }
      })
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})
*/
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.post('/test', function (req, res) {
    textapi.sentiment({
      'url': req.body.text
  }, function(error, response) {
      console.log(response);
       res.send(response);
    
  });
});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse)
})


