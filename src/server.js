import express from 'express';
import mongoose from 'mongoose'; //created model loading here
import bodyParser from 'body-parser';
const app = express(),
    port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.connect('mongodb+srv://yi:info6150@cluster0-t7mf5.azure.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
import {
    run
} from './server/app.js';
run(app);

app.listen(port);
console.log('Contacts RESTful API server started on: ' + port);