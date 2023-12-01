const jwt = require("jsonwebtoken");
// const nxtJwt = require('next-auth')

const generateToken = (id) => {
  return jwt.sign({ id }, "mysecret", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
