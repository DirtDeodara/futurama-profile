const logger = (req, res, next) => {
  console.log(`Attention! We have an incoming ${req.method} request from a client on the ${req.path} path!`);
  next();
};

module.exports = logger;
