// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// console.log('connected');

// }

const MongoClient = require("mongodb").MongoClient;

let url = "mongodb+srv://abdemustafa:admin@cluster0.cgiryyt.mongodb.net/test";
MongoClient.connect(url, (err, ClientObj) => {
    if (err) {
        throw err;

    }
    else {
        console.log('Db connceted');
    }
})

