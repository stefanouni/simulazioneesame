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

module.exports = app;