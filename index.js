require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const userRoute = require("./routes/authroutes");
const passport = require("passport");
const artisanRouter = require("./routes/artisanRoutes");
const categoryRouter = require("./routes/categoryRoute");
const orderRouter = require("./routes/orderRoutes");

const app = express();
require("./middleware/auth")(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRoute);
app.use("/", passport.authenticate("jwt", { session: false }), artisanRouter);
app.use("/", passport.authenticate("jwt", { session: false }), categoryRouter);
app.use("/", passport.authenticate("jwt", { session: false }), orderRouter);
//const api = process.env.API_URL;

app.use(morgan("tiny"));
module.exports = app;
