const express = require('express');
const path = require('path');
const cors = require('cors');
const url = require('url');

const fs = require('fs');
const logger = require('morgan');

const indexRouter = require('./routes/index');




const bodyParser = require('body-parser');

const app = express();




app.use(cors());

// is post Type data parsing in req.body;
app.use(bodyParser.urlencoded({extended:true}));

// ajax post data : { message :data2} parsing
app.use(bodyParser.json());


// index Router in Use
app.use('/',indexRouter);

// Server Listen

app.listen(3505,()=>{
    console.log('My Toy Project Running AT 3505 ');
});


app.use((err,req,res,next)=>{
    let statsuCode = 500;
    res.status(statsuCode).send(err.message);
})