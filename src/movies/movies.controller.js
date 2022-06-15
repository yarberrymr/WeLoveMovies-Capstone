const service = require("./movies.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

//paramscheck
const paramsCheck = async (req, res, next) => {
    const { movieId } = req.params;
    const match = await service.read(Number(movieId));
    if (match.length === 0 || !movieId)
      return next({
        status: 404,
        message: `movieId: ${movieId} does not exist in the database`,
      });
    res.locals.movie = match[0];
    next();
  };

//list
async function list(req, res) {
    const {is_showing} = req.query;
    const data = is_showing
    ? await (await service.listShowing()).splice(0,15)
    : await service.list();

    res.status(200).json({data: data });
}

//read
async function read(req, res) {
    res.status(200).json({data: res.locals.movie})
}

//listReviews
async function listReviews(req, res) {
  const movieId = res.locals.movie.movie_id;
  const reviews = await service.listReviews(movieId);
  const allReviews = [];
  reviews.forEach(review => {
    const critic = await service.getCritics(review.critic_id);
    review.critic = critic[0];
    allReviews.push(review);
  });
  res.status(200).json({ data: allReviews });
}

//listTheaters
async function listTheaters(req, res) {
  const movieId = res.locals.movie.movie_id;
  const result = await service.listTheaters(movieId);
  res.status(200).json({ data: result });
}

//module exports
module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(paramsCheck), asyncErrorBoundary(read)],
  listReviews: [
    asyncErrorBoundary(paramsCheck),
    asyncErrorBoundary(listReviews),
  ],
  listTheaters: [
    asyncErrorBoundary(paramsCheck),
    asyncErrorBoundary(listTheaters),
  ],
};