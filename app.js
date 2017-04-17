var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is the home page :)');
});

app.get('/contact', function(req, res){
    res.send('This is the contact page :)');
});

app.get('/profile/:name', function(req, res){
    res.send('You requested a profile with the name of ' + req.params.name);
});

app.listen(3000);
