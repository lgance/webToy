const express = require('express');
const router = express.Router();

const path = require('path');
const homePath = path.join(__dirname,'../');




router.get('/',(req,res,next)=>{
    try{
            console.log('Index Router');
            res.send('Success Index Router');
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
});

module.exports = router;
