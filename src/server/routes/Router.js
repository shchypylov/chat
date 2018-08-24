const express = require("express")
const path = require("path")
const UserSchema = require("../models/UserSchema");
const Router = express.Router();

Router.route("/login").post((req, res) => {
	UserSchema.findOne({login: req.body.login}).then(user => {

		if (user === null) {
			UserSchema.create(req.body).then((data) => {
				res.cookie("userID", data._id, {maxAge: 900000}).send(data);
			});
		}
		else {
			if (user.password === req.body.password) {
				res.cookie("userID", user._id, {maxAge: 900000}).send(user)
			} else {
				res.status(400).send({error: {message: "Wrong password"}})
			}
		}
	})
});

module.exports = Router;
