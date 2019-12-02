const User = require('../models/user.model.js')

//create
exports.create = function (req, res) {
    if (req.isAuthenticated()) {

        const { name, email, password, password2 } = req.body;

        //ensures email isn't case sensitive
        let { username } = req.body;
        username = username.toLowerCase();

        //Do server-side form validation here: password length
        //is the email an actual email etc.
        let errors = [];

        //Check required fields
        if (!name || !email || !password || !password2 || !username) {
            errors.push({ msg: "Please fill in all fields" });
        }

        if (password !== password2) {
            errors.push({ msg: "Passwords do not match" });
        }

        if (password.length < 6) {
            errors.push({ msg: "Password should be at least 6 characters" });
        }

        if (errors.length > 0) {
            return res.send({
                success: false,
                message: errors
            });
        }

        //Validation passed
        User.findOne({ username: username }).then(user => {
            if (user) {
                //Flash the error
                errors.push({ msg: "Username is already registered" });
                console.log("username already registered!!");
                return res.send({
                    success: false,
                    messsage: errors
                });
            }
            //Create a new database entry
            const newUser = new User({
                name,
                username,
                email,
                password
            });

            console.log(newUser);
            newUser.password = newUser.generateHash(password);
            newUser.save((error) => {
                console.log("This is req.session from /register: " + req.session);
                if (error) {
                    errors.push("Server error: registering new user to database");
                    return res.send({
                        success: false,
                        message: errors
                    });
                } else {
                    return res.send({
                        success: true,
                        message: "Succcessful registration!"
                    });
                }
            });
        });

    } else {
        return res.send({
            success: false,
            message: "unauthorized register"
        });
    }
}

//read
exports.get = function (req, res) {
    if (req.isAuthenticated()) {

        if (req.body.username) {
            username = req.body.username.toLowerCase();
            User.findOne({ username: username }, function (error, user) {
                if (error) {
                    console.log(error);
                    res.status(400).send(error);
                }
                else {
                    if (user) {
                        return res.send({
                            user: user,
                            success: true,
                            message: "Succcessful getOne!"
                        });
                    }
                    else {
                        return res.send({
                            success: false,
                            message: "Cannot find username!"
                        });
                    }
                }
            });
        }
        else {
            User.find({}, function (error, users) {
                if (error) {
                    console.log(error);
                    res.status(400).send(error);
                }
                else {
                    return res.send({
                        users: users,
                        success: true,
                        message: "Succcessful getAll!"
                    });
                }
            }).sort('name');
        }
    }
    else {
        return res.send({
            success: false,
            message: "unauthorized get"
        });
    }

    
}



exports.getAll = function (req, res) {
    if (req.isAuthenticated()) {
        User.find({}, function (error, users) {
            if (error) {
                console.log(error);
                res.status(400).send(error);
            }
            else {
                return res.send({
                    users: JSON.stringify(users),
                    success: true,
                    message: "Succcessful registration!"
                });
            }
        }).sort('name');
        

    } else {
        return res.send({
            success: false,
            message: "unauthorized getAll"
        });
    }
}


//update
exports.update = function (req, res) {
    if (req.isAuthenticated()) {

        const { name, email, password, password2 } = req.body;

        //ensures email isn't case sensitive
        let { username } = req.body;

        //Do server-side form validation here: password length
        //is the email an actual email etc.
        let errors = [];

        //Check required fields
        if (!name || !email || !password || !password2 || !username) {
            errors.push({ msg: "Please fill in all fields" });
        }

        if (password !== password2) {
            errors.push({ msg: "Passwords do not match" });
        }

        if (password.length < 6) {
            errors.push({ msg: "Password should be at least 6 characters" });
        }

        if (errors.length > 0) {
            return res.send({
                success: false,
                message: errors
            });
        }

        //Validation passed
        User.findOne({ username: username }).then(user => {
            if (user) {

                user.password = user.generateHash(password);
                user.name = name;
                user.email = email;
                user.save((error) => {
                    if (error) {
                        errors.push("Server error: updating user to database");
                        return res.send({
                            success: false,
                            message: errors
                        });
                    } else {
                        return res.send({
                            success: true,
                            message: "Succcessful update!"
                        });
                    }
                });

            }
            else {
                //Flash the error
                errors.push({ msg: "Cannot find user" });
                console.log("Cannot find user!!");
                return res.send({
                    success: false,
                    messsage: errors
                });

            }
            //Create a new database entry
           
        });

    } else {
        return res.send({
            success: false,
            message: "unauthorized update"
        });
    }
}


//delete
exports.delete = function (req, res) {
    if (req.isAuthenticated()) {

        

        //ensures email isn't case sensitive
        let { username } = req.body;
        username = username.toLowerCase();

       
        //Validation passed
        User.findOneAndRemove({ username: username })
        .then((user) => {


            if (user) {
                return res.send({
                    success: true,
                    message: "delete successful"
                });
            } else {
                return res.send({
                    success: false,
                    message: "cannot find user"
                });
            }
        }).catch((error) => {
            if (error) {
                errors.push("Server error: deleting user from database");
                return res.send({
                    success: false,
                    message: errors
                });
            }
        })

    } else {
        return res.send({
            success: false,
            message: "unauthorized delete"
        });
    }
}