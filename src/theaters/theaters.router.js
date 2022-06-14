const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router
    .route("/theaters")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router