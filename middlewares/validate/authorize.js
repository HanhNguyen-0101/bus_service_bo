const { User, userType } = require("../../services/index.service");

const authorize = (typeArr) => {
  return async (req, res, next) => {
    const { user } = req;
    const userData = await User.findOne({
      include: [{ model: userType, as: "typeObj", map: "typeId" }],
      where: {
        key: "email",
        value: user.email,
      },
    });
    const index = typeArr.findIndex((i) => i === userData.typeObj.name);
    if (index !== -1) {
      next();
    } else {
      res.status(403).send({ message: "Error Authorize" });
    }
  };
};

module.exports = {
  authorize,
};
