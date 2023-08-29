const express = require('express');
const MongClient = require('mongodb').MongoClient;
// const hbss = require('hbs');
// const hbs = require('express-handlebars')
// const handlebars = require('./he')
const app = express();
const path = require('path');

// const sPath = path.join(__dirname,"index");
// app.use(express.static(sPath));
app.use('/assets', express.static('assets'))
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
})

const url = 'mongodb://localhost:27017';

// console.log(url);
MongClient.connect(url, (err, cliObj) => {
    if (err) throw err;
    else {
        console.log("connection Successfully...");
    }
})

app.get('/index', (req, res) => {

})
app.post("/index", (req, res) => {

})

app.listen(500, () => {
    console.log("Server start");
})