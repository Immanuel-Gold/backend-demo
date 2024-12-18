const errorHandler = (err, req, res, next) => {
  if (err.status) {
    const error = new Error(err.message);

    return next(error);
  }
};

export default errorHandler;
