//route for theaters methods, including methodNotAllowed for all non-coded methods

const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router
