require("dotenv").config();

let express = require("express");
let app = express();
let sequelize = require("./db");
let bodyParser = require("body-parser");
let user = require("./controllers/users-controller");

sequelize.sync()
app.use(require("./middleware/headers"))
app.use(bodyParser.json());
app.use("/user", user)
app.use(require("./middleware/validate-token"))

app.listen(process.env.PORT, function(req, res){
    console.log("App is listening on 3000")
})