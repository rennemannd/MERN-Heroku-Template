const path = require('path'),
    express = require('express'),

    mongooseSetup = require("./database"),
    session = require("express-session"),
    MongoStore = require("connect-mongo")(session),
    passport = require("passport"),
    users = require("../routes/users.server.routes"),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    pressRouter = require('../routes/press.server.routes');
    projectRouter = require('../routes/project.server.routes');

module.exports.init = () => {
    //connect to database
    mongooseSetup.start();

    //config passport
    require("./passport")(passport);

    // initialize app
    const app = express();
    //app.set("trust proxy", true) //found on user-auth repo


    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json({limit: '50mb', extended: true})),
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


    //Express session middleware
    app.use(
        session({
            name: "sid",
            resave: false,
            saveUninitialized: false,
            secret: process.env.SECRET || require('./config').secret,
            store: new MongoStore({ mongooseConnection: mongooseSetup.connection }),
            cookie: {
                httpOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24 * 1 // 1 day
            }
        })
    );


    //passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

    // add routers
    app.use("/api/users", users); //api for user authentication

    app.use('/api/press', pressRouter, function (res, req, next) { //api for press releases
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use('/api/project', projectRouter, function (res, req, next) { //api for press releases
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

