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

router.get('/errorTest',(req,res,next)=>{
    try{
        throw new Error('에러에러에러발생 500 에러 ');
    }
    catch(err){console.error(err);next(err);}
})
module.exports = router;
