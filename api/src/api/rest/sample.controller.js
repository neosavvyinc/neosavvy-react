function search(req, res, next) {
  res.json({ hello: 'world' });
  next();
};

module.exports = {
  search
};
