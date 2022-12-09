const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { User, userType } = require("./../models/index");
const { SECRET, DOMAIN } = require("../utils/constants");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      phone: numberPhone,
      avatar: gravatar.url(email),
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      include: [{ model: userType, as: "typeObj" }],
      where: {
        email,
      },
    });
    if (user) {
      const isAuth = bcrypt.compareSync(password, user.password);
      if (isAuth) {
        const { email, name, phone, password, typeId } = user;
        const token = await jwt.sign(
          { email, name, phone, password, typeId },
          SECRET,
          {
            expiresIn: 60 * 60,
          }
        );
        res.status(200).send({ user, token });
      } else {
        res.status(401).send({ message: "Password is wrong" });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const addUser = async (req, res) => {
  const { name, email, password, numberPhone, typeId } = req.body;
  const { file } = req;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const avatar = `${DOMAIN}/${file.path}`;
    const newItem = await User.create({
      name,
      email,
      password: hashPassword,
      phone: numberPhone,
      avatar,
      typeId,
    });
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
};
const editUser = async (req, res) => {
  const { name, email, password, numberPhone, typeId } = req.body;
  const { id } = req.params;
  const { file } = req;
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (file) {
      const avatar = `${DOMAIN}/${file.path}`;
      user.avatar = avatar;
    }
    user.name = name;
    user.email = email;
    user.phone = numberPhone;
    if (password !== user.password) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      user.password = hashPassword;
    } else {
      user.password = password;
    }
    user.typeId = typeId;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({ message: `Delete ID: ${id} is successfully` });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUser = async (req, res) => {
  const { name, email } = req.query;
  try {
    if (email) {
      const users = await User.findAll({
        include: [{ model: userType, as: "typeObj" }],
        where: {
          email: {
            [Op.like]: `%${email}%`,
          },
        },
      });
      res.status(200).send(users);
    } else if (name) {
      const users = await User.findAll({
        include: [{ model: userType, as: "typeObj" }],
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(users);
    } else {
      const users = await User.findAll({
        include: [{ model: userType, as: "typeObj" }],
      });
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      include: [{ model: userType, as: "typeObj" }],
      where: {
        id,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  try {
    const userFound = await User.findOne({
      where: {
        email: user.email,
      },
    });
    userFound.avatar = `${DOMAIN}/${file.path}`;
    await userFound.save();
    res.status(200).send(userFound);
  } catch (error) {
    res.status(500).send(error);
  }
};
const findUserByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const user = await User.findAll({
      include: [{ model: userType, as: "typeObj" }],
      where: {
        [Op.or]: [
          {
            email: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            phone: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  register,
  login,
  editUser,
  addUser,
  deleteUser,
  getAllUser,
  getUserDetail,
  uploadAvatar,
  findUserByKeyword,
};
