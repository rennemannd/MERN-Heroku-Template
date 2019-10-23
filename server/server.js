const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config/config.example'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('./routes/examples.server.routes');

//connect to database
// mongoose.connect(config.db.uri, {
//     useNewUrlParser: true
// });
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

//initialize app
const app = express();

//setting the port
const port = process.env.PORT || 5000;

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());

//add a router
app.use('/api/example', exampleRouter);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));
