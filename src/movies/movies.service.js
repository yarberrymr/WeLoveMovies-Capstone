const db = require("../db/connection")

function list() {
    return db("movies");
}

function listShowing() {
    return db("movies as m")
    .join("movie_theaters as mt", "mt.movie_id", "m.movie_id")
    .where({"mt.is_showing": true});
}

function read(movieId) {
    return db("movies").where({ movie_id: movieId })
}



module.exports = {
    list,
    listShowing,
    read
}