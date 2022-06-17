//function to handle any non-coded methods in the application
function methodNotAllowed(req, res, next) {
    return next({
      status: 404,
      message: `${req.method} is not allowed for ${req.originalUrl}`,
    });
  }
  
  module.exports = methodNotAllowed;
