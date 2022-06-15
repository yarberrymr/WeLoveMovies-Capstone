const service = require("./reviews.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

//paramsCheck
async function paramsCheck(req, res, next) {
    const { reviewId } = req.params;
    const match = await service.read(reviewId);
    if (match.length === 0 || !reviewId)
      return next({ status: 404, message: "Review cannot be found." });
    res.locals.review = match[0];
  
    next();
  }

//bodyCheck


//list


//read
async function read(req, res) {
    res.status(200).json({data: res.locals.review})
}

//put


//destroy


//module exports
module.exports = {
    read: [asyncErrorBoundary(paramsCheck), read]
}