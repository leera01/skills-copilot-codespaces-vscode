// Create web server and listen to port 3000
// Show comments on the webpage
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/comments', function(req, res){
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', function(err, data){
        if (err) {
            console.log(err);
            res.send([]);
            return;
        }
        res.send(data);
    });
});

app.listen(3000, function(){
    console.log('Server is listening on port 3000');
});