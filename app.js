const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const square = require('./square');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get('/square', function (req, res) {
    var result = square( req.query.string )
    res.status(200).send( { result: result } )
})

app.get('/', function(req, res) {
	res.send('Hello! The API is at /api/v1');
});

module.exports = app;