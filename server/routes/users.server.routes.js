const express = require("express");
const passport = require("passport");
const router = express.Router();


//controller for admin User profiles

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
router.route("/register")
    .post(Users.create);

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

//CRUD for users
router.route('/')
    .get(Users.get)
    .post(Users.create)
    .put(Users.update)
    .delete(Users.delete);

module.exports = router;
