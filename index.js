const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(`Error in runing the server: ${err}`);
    }
    console.log(`server is runing on port: ${port}`);
});