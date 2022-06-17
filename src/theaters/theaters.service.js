const db = require("../db/connection");

//returns all theaters from theaters table for use in the controller
function list() {
  return db("theaters");
}

//returns theaters paired with movies for use in the controller
function getMovies(theaterId) {
  return db("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("m.*", "mt.is_showing")
    .where({ "t.theater_id": theaterId });
}

//module exports
module.exports = {
  list,
  getMovies,
};
