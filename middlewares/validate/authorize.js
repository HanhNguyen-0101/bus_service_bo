const authorize = (typeArr) => {
  return async (req, res, next) => {
    next();
  //   const { user } = req;
  //   const userData = await User.findOne({
  //     include: [{ model: userType, as: "typeObj" }],
  //     where: {
  //       email: user.email,
  //     },
  //   });
  //   const index = typeArr.findIndex((i) => i === userData.typeObj.name);
  //   if (index !== -1) {
  //     next();
  //   } else {
  //     res.status(403).send({ message: "Error Authorize" });
  //   }
  };
};

module.exports = {
  authorize,
};
