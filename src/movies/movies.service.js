const db = require("../db/connection");

//returns movies table to be used in controller
function list() {
  return db("movies");
}

//returns only currently showing from the movies table for use in the controller
function listShowing() {
  return db("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .where({ "mt.is_showing": true });
}

//returns one movie from the movies table for use in the controller
function read(movieId) {
  return db("movies").where({ movie_id: movieId });
}

//returns one critic from the critic table for use in the controller
function getCritics(criticId) {
  return db("critics").where({ critic_id: criticId });
}

//returns reviews from the reviews table for use in the controller
function listReviews(movieId) {
  return db("movies as m")
    .join("reviews as r", "m.movie_id", "r.movie_id")
    .where({ "m.movie_id": movieId });
}

//returns theaters from the theaters table for use in the controller
function listTheaters(movieId) {
  return db("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .join("theaters as t", "t.theater_id", "mt.theater_id")
    .select("t.*", "m.movie_id")
    .where({ "m.movie_id": movieId });
}

//module exports
module.exports = {
  list,
  listShowing,
  read,
  getCritics,
  listReviews,
  listTheaters,
};
