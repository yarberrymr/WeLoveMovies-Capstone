const db = require("../db/connection");

//returns all reviews from the reviews table for use in the controller
function list() {
  return db("reviews");
}

//returns chosen review from the reviews table for use in the controller
function read(reviewId) {
  return db("reviews").where({ review_id: reviewId });
}

//updates and returns chosen review from the reviews table for use in the controller
function update(updatedReview, reviewId) {
  return db("reviews")
    .select("*")
    .where({ review_id: reviewId })
    .update({ ...updatedReview, updated_at: db.fn.now() })
    .then((updatedRecords) => updatedRecords[0]);
}

//returns critic from the critics table for use in the controller
function getCritic(criticId) {
  return db("critics").where({ critic_id: criticId }).select();
}

//removes chosen review entry in the reviews table
function destroy(reviewId) {
  return db("reviews").where({ review_id: reviewId }).del();
}

//module exports
module.exports = {
  list,
  read,
  update,
  getCritic,
  destroy,
};
