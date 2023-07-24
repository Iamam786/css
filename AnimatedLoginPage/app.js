const { log } = require('console');
const express = require('express');
const MongClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";
console.log(url);
MongClient.connect(url,(err,cliObj)=>{
    if(err) throw err;
    else{
        console.log("connection Successfully...");
    }
})
const app = express();

app.get('/index',(req,res)=>{
 
})
app.post("/index",(req,res)=>{

})

app.listen(500,()=>{
    console.log("Server start");
})