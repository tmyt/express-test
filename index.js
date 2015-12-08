"use strict";

let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('OK');
});

app.listen(3000);
