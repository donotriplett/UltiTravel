let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let User = sequelize.import("../models/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

router.post("/create", function (req, res) {

    let name = req.body.user.name;
    let pass = req.body.user.password;
    let teamName = req.body.user.teamName
    let division = req.body.user.division

    User.create({
        name: name,
        passwordhash: bcrypt.hashSync(pass, 10),
        teamname: teamName,
        division: division

    }).then(
        function createSuccess(user) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

            res.json({
                user: user,
                message: "user created",
                sessionToken: token
            })
        },
        function createError(err) {
            res.status(500).send(err.message)
        }
    )
})

router.post("/signin", function (req, res) {
    User.findOne({ where: { teamname: req.body.user.teamname } })
        .then(
            function (user) {
                if (user) {
                    bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                        if (matches) {
                            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
                            res.json({
                                user: user,
                                message: "successfully authenticated user",
                                sessionToken: token
                            })
                        } else {
                            res.status(502).send({ error: "failed to find user" })
                        }
                    })
                } else {
                    res.status(500).send({ error: "failed to authenticate user" })
                }
            },
            function (err) {
                res.status(501).send({ err: "something went wrong" })
            }
        )
})

module.exports = router