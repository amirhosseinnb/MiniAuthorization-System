const { Router } = require("express");
const { AuthRouters } = require("./auth.routes");

const router = Router();
router.use("/auth", AuthRouters);

module.exports = {
  AllRouters: router,
};
