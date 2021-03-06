var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const users = require('./routes/users');
const knex = require('./db/knex');



var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../client')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/users', users)

app.use('*', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '/../client')
    })
})

app.use(function(err, req, res, next) {
    const response = {
        message: err.message
    }
    if (req.app.get('env') === 'development') {
        response.stack = err.stack
    }

    res.status(err.status || 500).json(response);
});

module.exports = app;
