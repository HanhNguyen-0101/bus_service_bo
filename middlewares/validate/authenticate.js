const jwt = require("jsonwebtoken");
const { SECRET } = require("../../utils/constants");

const authenticate = async (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split("Bearer ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).send({ message: "Please login" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = {
  authenticate,
};
