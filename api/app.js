const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();
const port = 3000;

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

//To create a JSON web token
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require('./src/config/passport')(passport);

//parse incomming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Required routes
const UserRoutes = require('./src/routes/user-routes');
const AuthRoutes = require('./src/routes/auth-routes');

//create connection to the routes
app.use('/user',UserRoutes);
app.use('/auth',AuthRoutes);

// app.post('/login', urlencodedParser, function (req, res) {
//     console.log('welcome, ' + req.body.phoneNumber)
//   })


app.use(cors({
    origin:[
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'http://localhost:8080',
        'http://127.0.0.1:8080',
        'http://localhost:3000',
        keys.mongouri.uri
    ],
    credentials:true
}));


//const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost/School_Service';



// MongoClient.connect(url,function(err, db) {
//     const cursor = db.collection
//     console.log('Connected');
//     db.close();
// });
