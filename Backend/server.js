
const express = require('express');
const connectdb = require('./Modals/db.js');
const app = express();
const cors = require('cors');
const Authrouter = require('./Routers/AuthRouter.js')

connectdb();
app.get('/login',(req, res)=>{
    res.send('Login page');
});

app.use(express.json());
app.use(cors());
app.use('/auth',Authrouter);
app.listen(8080, ()=>{
    console.log("server is listening");
})

