const path = require('path'),
    express = require('express'),

    mongooseSetup = require("./database"),
    session = require("express-session"),
    MongoStore = require("connect-mongo")(session),
    passport = require("passport"),
    //index = require("./routes/index"),
    //users = require("./routes/users"),

    //mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    pressRouter = require('../routes/press.server.routes');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongooseSetup.start();



    /*
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);*/

    // initialize app
    const app = express();
    


    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json({limit: '50mb', extended: true})),
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

    // add a router
    app.use('/api/press', pressRouter, function (res, req, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

