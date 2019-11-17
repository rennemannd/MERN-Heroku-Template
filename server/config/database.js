const mongoose = require("mongoose");
const uri = require("./config").db.MongoURI;

module.exports = {
    start: function () {
        mongoose
            .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(console.log("MongoDB connected successfully"))
            .catch(err => console.log(err));
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);
    },
    connection: mongoose.connection
};
