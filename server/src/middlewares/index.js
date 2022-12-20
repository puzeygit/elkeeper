const localsMiddle = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

const deleteProtect = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.sendStatus(401);
};

module.exports = { localsMiddle, deleteProtect };
