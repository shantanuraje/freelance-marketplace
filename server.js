//load environment config file
let config = require('./config/config.js');
//check if production (AWS) or development (0.0.0.0) environment
let environment = process.env.NODE_ENV || 'development';

//log environment parameters
console.log("Environment: ", environment);
console.log("Environment Config: ", config[environment]);


let mongoose = require('mongoose');
let express = require("express");
let bodyParser = require('body-parser');
let app = express();

// require mongoose to connect to and work on MongoDB database
let Project = require('./app/models/Project'); // import Project Model

// setup connection with MongoDB according to environment
mongoose.connect(config[environment].db);
let db = mongoose.connection;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.listen(3000)

app.get('/projects', function (req, res) {
    console.log("GET Request to get all projects");
})

app.post('/createProject', function (req, res) {
    console.log("POST Request to Create New Project");
    console.log(req.body);
    Project.create(req.body, function (err, project) {
        if (err) {
            console.error(err);
        }else{
            res.send(project);

        }
    })
})