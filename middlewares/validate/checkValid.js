const checkPasswordValid = (req, res, next) => {
  const { password } = req.body;
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (password.match(passw)) {
    next();
  } else {
    res.status(402).send({ message: "Password invalid" });
  }
};

module.exports = {
  checkPasswordValid,
};
