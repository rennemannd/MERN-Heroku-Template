const express = require("express");
const passport = require("passport");
const router = express.Router();

//User model
const User = require("../models/user.model");

//User controller
const Users = require('../controllers/users.server.controller.js');

//Verify - this is for the frontend
router.get("/verify", (req, res) => {

    console.log("This is req.session from /verify" + JSON.stringify(req.session));
    if (req.isAuthenticated()) {
        const clientUser = {
            name: req.user.name,
            username: req.user.username,
            email: req.user.email,
            loggedIn: true
        };
        return res.send({
            success: true,
            message: "Valid session",
            user: clientUser
        });
    } else {
        emptyUser = {
            name: "",
            username: "",
            email: "",
            loggedIn: false
        };
        return res.send({
            success: false,
            message: "Couldn't find session",
            user: emptyUser
        });
    }

});

//Register Handle
router.post("/register", (req, res) => {
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
});

//Login handle
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(
        "This is req.session from /login: " + JSON.stringify(req.session)
    );

    return res.send({
        success: true,
        message: "successful login",
    });
    //Our function defined in passport takes care of ths route
});

//Logout handle
router.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send({
                success: false,
                message: "Server error: couldn't destroy session (log user out)"
            });
        }
        req.logout();
        res.clearCookie("sid").send({
            success: true,
            message: "Successfully logged out"
        });
    });
});

router.route('/')
    .get(Users.get)
    .post(Users.create)
    .put(Users.update)
    .delete(Users.delete);

module.exports = router;
