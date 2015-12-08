"use strict";

let process = require('process');
let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('OK');
});

let port = process.env.PORT || 3000;
app.listen(port);
console.log('listen on ' + port);
