
const express = require('express');
const connectdb = require('./Modals/db.js');
const app = express();

connectdb();
app.get('/login',(req, res)=>{
    res.send('Login page');
});

app.listen(8080, ()=>{
    console.log("server is listening");
})

