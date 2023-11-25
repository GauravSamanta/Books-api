require("express-async-errors");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

//Security Packages

const cors = require("cors");
const helm = require("helmet");
const xss = require("xss-clean");
app.use(cors());
app.use(helm());
app.use(xss());

//Middlewares
const authentication = require("./Middlewares/auth");

//Routes
const bookRouter = require("./Routes/bookRoutes");
const authRouter = require("./Routes/auth");
const profile = require("./Routes/user");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", bookRouter);
app.use("/api/v1", profile);

//Database
const connect = require("./Config/db");
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
