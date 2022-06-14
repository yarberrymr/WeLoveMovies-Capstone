const service = require("./reviews.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

//paramsCheck


//bodyCheck


//list


//read
async function read(req, res) {
    res.status(200).json({data: res.locals.review})
}

//put


//destroy


//module exports
