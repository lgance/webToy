const express = require('express');
const path = require('path');
const cors = require('cors');
const url = require('url');

const fs = require('fs');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const pug_ = require('pug');

const app = express();


app.set('views',path.join(__diranme,'views'));
app.set('view engine','pug');

app.use(cors());

app.use(logger('dev'));

// 정적 파일 기록시 morgan 보다 위에 올려야함
// public에 원하는 파일이 없을 때 next
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser('secret code'));

app.use(session({
    resave:false, // 세션이 수정되지 않았을 때 저장 여부
    saveUninitialized:false, // 세션에 저장할 내역이 없을 때에 저장 유무
    secret:'secret Code', // cookie-Parser의 비밀키 
    cookie:{
        httpOnly:true,
        secure:false,
        // 이외 maxAge,domain,path,expires,sameSite... 
    }
}))

// is post Type data parsing in req.body; // 이거 쳋크해봐야댐
app.use(bodyParser.urlencoded({extended:true}));

// ajax post data : { message :data2 } parsing
app.use(bodyParser.json());

// private middleware
app.use((req,res,next)=>{
    console.log('my private middleware');
    console.log(req.headers);
    console.log(req.session);

    next();
});



// index Router in Use
app.use('/',indexRouter);




if(!!clusterFlag){
    if(cluster.isMaster){
        console.log(`Master Process ID : ${process.pid}`);
           for(let i=0;i<numCPUs;i+=1){
                   cluster.fork();
           }
           cluster.on('exit',(worker,code,signal) =>{
               console.log(`${worker.process.pid} is Worker Exit `);
               cluster.fork();
           });
   
   } else {
       http.createServer((req,res) =>{
               res.write('<h1>hello Node! </h1>');
               res.end('<p> Hello Cluster ! </p>');
               setTimeout(()=>{
                   process.exit(1);
               },1000);
   
       }).listen(8085);
           console.log(`${process.pid} is Worker Run`);
   }
}
else{
    // Server Listen
    app.listen(3505,(req,res,next)=>{
        console.log('My Toy Project Running AT 3505 ');
    });

}


// Use 404 Handling
app.use((req,res,next)=>{
    res.status(404).send('404 Not Found');
});
// Use 500 Internal Server Error Handling
app.use((err,req,res,next)=>{
    let statsuCode = 500;
    console.log(err);
    res.status(statsuCode).send(err.message);
});