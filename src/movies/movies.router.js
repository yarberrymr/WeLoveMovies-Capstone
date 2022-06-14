const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router
    .route("/movies/:movieId/reviews")
    .get(controller.listReviews)
    .all(methodNotAllowed);

router
    .route("/movies/:movieId/theaters")
    .get(controller.listTheaters)
    .all(methodNotAllowed);

router
    .route("/movies/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router