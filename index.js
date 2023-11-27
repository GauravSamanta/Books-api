require("express-async-errors");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

//Security Packages

const cors = require("cors");
const helm = require("helmet");
app.use(cors());
app.use(helm());

//Middlewares
const authentication = require("./Middlewares/auth");
//Routes
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/auth");
const profile = require("./routes/user");

app.use("/v1/auth", authRouter);
app.use("/v1", authentication, bookRouter);
app.use("/v1", authentication, profile);

app.get("/", (req, res) => {  
  res.status(StatusCodes.OK).send("Welcome to Books Review API");
});

//Database
const connect = require("./Config/db");
const { StatusCodes } = require("http-status-codes");
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Books Review app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
