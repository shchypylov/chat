const express = require("express")
const path = require("path")
const UserSchema = require("../models/UserSchema");
const Router = express.Router();

Router.route("/login").post((req, res) => {
	UserSchema.findOne({login: req.body.login}).then(user => {
		if (user === null) {
			UserSchema.create(req.body).then((data) => {
				res.cookie("userID", user._id, {maxAge: 900000, httpOnly: true}).send(data);
			});
		}
		else {
			if (user.password === req.body.password) {
				res.cookie("userID", user._id, {maxAge: 900000}).send(user)
			} else {
				res.send({error: {message: "Wrong password"}})
			}
		}
	})
});

module.exports = Router;
