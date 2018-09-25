const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const authHeader = req.get("authorization");
  if (authHeader != null && authHeader.length > 0) {
    const [scheme, token] = authHeader.split(" ");
    if (!/^Bearer/i.test(scheme)) {
      let e = new Error();
      e.status = 400;
      next(e);
      return;
    }

    const secretKey = config.get("jwt.secret_key");

    let tokenPayload;
    try {
      tokenPayload = jwt.verify(token, secretKey);

      next();
    } catch (error) {
      error.status = 500;
      next(error);
    } finally {
      return;
    }
  }

  let e = new Error();
  e.status = 401;
  next(e);
};
