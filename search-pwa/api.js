//import express from 'express';
const dboperation = require('./dboperation');
var Db = require('./dboperation');
var Posts= require('./posts');

var express = require('express');
var bodyParser= require('body-parser');
var cors= require('cors');
var app = express();
var router= express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,reponse,next)=>{
next();
})

router.route('/posts').get((request,reponse)=>{
    //console.log(request);
    dboperation.getPosts().then(result => {
      //console.log(result[0]);s
        reponse.json(result[0]);
    })
})

router.route('/posts').post((request,reponse)=>{
    console.log("REQ BODY" + JSON.stringify(request.body));
    dboperation.getPosts(request.body.text).then(result => {
        //console.log(result[0]);
        reponse.json(result[0]);
    })
})

var port= 8090;
app.listen(port);
console.log('Api is running at'+ port);

//console.log('print DB',Db);


// Db.sql.connect('http://localhost:8090/api/posts');
// app.use(cors());
// //app.use(express.json());

//
 //app.use(express.urlencoded({ extended: false }));
// //app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public/images')));

// routes(app);

