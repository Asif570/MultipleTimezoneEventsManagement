const notfoundhundeler = (_req, res, next) => {
  const error = new Error("Resource Not Found !!");
  error.status = 404;
  next(error);
};
const hundanError = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Server Problem !!!" });
  }
};

module.exports = {
  notfoundhundeler,
  hundanError,
};
