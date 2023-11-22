const jwt = require("jsonwebtoken");
const StatusCodes = require("http-status-codes");

const auth = (req, res,next) => {
  const authheader = req.headers.authorization;
  if (!authheader | !authheader.startsWith('Bearer ')) {
    res.send("not ok")
  }
  const token = authheader.split(" ")[1];

  try {
    const payload = jwt.verify(token, "secret");
    req.user = { userid: payload.userid, name: payload.name };
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED);
  }
};

module.exports=auth;