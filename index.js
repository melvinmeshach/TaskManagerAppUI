const express 		    = require('express');
const app 			  	= express();
const bodyParser 		= require('body-parser');
const path              = require('path');

app.use(bodyParser.json());

app.get('/', function(req, res){
        app.use(express.static(path.join(__dirname)));
    
        res.sendFile(path.join(__dirname, './index.html'));
    });
app.listen(3000, ()=>{
    console.log('running on 3000')
});