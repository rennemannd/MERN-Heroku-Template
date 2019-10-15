var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('../routes/examples.server.routes')

module.exports.init = function () {
    //connect to database
    // mongoose.connect(config.db.uri, {
    //     useNewUrlParser: true
    // });
    // mongoose.set('useCreateIndex', true);
    // mongoose.set('useFindAndModify', false);

    //initialize app
    var app = express();

    //enable request logging for development debugging
    app.use(morgan('dev'));

    //body parsing middleware 
    app.use(bodyParser.json());

    //serve client files
    app.use(express.static(path.join(__dirname, '../../client/build')));

    //add a router
    app.use('/api/example', exampleRouter);

    //all other requests send to the homepage
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '../../../client/build/index.html'));
    });

    return app;
};