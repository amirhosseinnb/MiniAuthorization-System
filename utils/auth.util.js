const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "i0slyk43yggAVoqctTcKuaGc076Ph0TL";

function hashPassword(password) {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
}
function comparePassword(password, hashed) {
  return compareSync(password, hashed);
}
function signToken(payload) {
  return jwt.sign(payload, secret);
}
function verifyToken(token) {
  return jwt.verify(token, secret);
}
module.exports = {
  hashPassword,
  comparePassword,
  signToken,
};
