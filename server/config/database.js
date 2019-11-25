const mongoose = require("mongoose");

module.exports = {
    start: function () {
        mongoose
        .connect(process.env.DB_URI || require('./config').db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(console.log("MongoDB connected successfully"))
            .catch(err => console.log(err));
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
    },
    connection: mongoose.connection
};
