const errorHandler = (func) => async (req, res, next) => {
  return Promise.resolve(func(req, res, next)).catch((err) => {
    console.log(err);
    if (err) {
      res.status(500).json({
        message: err.message,
        type: "error",
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
        type: "error",
      });
    }
  });
};

module.exports = errorHandler;
