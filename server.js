const express = require("express");
const app = express();
const port = 3000;
const bookRouter = require("./Routes/bookRoutes");
const authRouter = require("./Routes/auth");
const authentication=require('./Middlewares/demo')
const connect = require("./Config/db");
require('dotenv').config();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1",authentication, bookRouter);

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