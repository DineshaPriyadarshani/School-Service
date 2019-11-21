const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const routes = require('./src/routes/user-routes');

//import database url
const keys = require('./src/config/keys');

//connect to the database
const connection = mongoose.connect(keys.mongouri.uri);
if(connection) {
    console.log("Database connected");
} else {
    console.log("Database not connected");
}

app.listen(port, () => {
    console.log('Server is up in port: '+ port);
});

//To read the request body
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

//create connection to the routes
app.use('/api',urlencodedParser,routes);



// app.post('/login', urlencodedParser, function (req, res) {
//     console.log('welcome, ' + req.body.phoneNumber)
//   })
const cors = require('cors');


// app.use(cors({
//     origin:[
//         'http://localhost:4200',
//         'http://127.0.0.1:4200',
//         'http://localhost:8080',
//         'http://127.0.0.1:8080',
//         'http://localhost:3000',
//         keys.AppUri
//     ],
//     credentials:true
// }));


//const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost/School_Service';



// MongoClient.connect(url,function(err, db) {
//     const cursor = db.collection
//     console.log('Connected');
//     db.close();
// });
