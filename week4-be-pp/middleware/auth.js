

function auth(req, res, next) {
  if (req.query.admin === "true") {
    return  next()
  } else {
    res.status(403).send("ERROR: You must be an admin")
  }
}

module.exports = auth;
