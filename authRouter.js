const Router = require("express");
const router = new Router();
// router - может прослушивать запросы типа delete, get, post ...
const controller = require("./authController");
const { check } = require("express-validator");

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
