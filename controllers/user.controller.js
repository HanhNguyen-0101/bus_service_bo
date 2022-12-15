const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { SECRET, DOMAIN } = require("../utils/constants");
const { User, userType } = require("../services/index.service");

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
      include: [
        {
          model: userType,
          as: "typeObj",
          map: "typeId",
        },
      ],
      where: {
        key: "email",
        value: email,
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
    const userItem = await User.findOne({
      where: { key: "id", value: id },
    });
    const item = {
      name: name || userItem.name,
      email: email || userItem.email,
      phone: numberPhone || userItem.phone,
      typeId: typeId || userItem.typeId,
      avatar: file ? `${DOMAIN}/${file.path}` : userItem.avatar,
    };
    if (password !== userItem.password) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      item.password = hashPassword;
    } else {
      item.password = password;
    }
    const user = await User.update(id, item);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { key: "id", value: id } });
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
        include: [
          {
            model: userType,
            as: "typeObj",
            map: "typeId",
          },
        ],
        where: {
          key: "email",
          value: email,
        },
      });
      res.status(200).send(users);
    } else if (name) {
      const users = await User.findAll({
        include: [
          {
            model: userType,
            as: "typeObj",
            map: "typeId",
          },
        ],
        where: {
          key: "name",
          value: name,
        },
      });
      res.status(200).send(users);
    } else {
      const users = await User.findAll({
        include: [
          {
            model: userType,
            as: "typeObj",
            map: "typeId",
          },
        ],
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
      include: [
        {
          model: userType,
          as: "typeObj",
          map: "typeId",
        },
      ],
      where: {
        key: "id",
        value: id,
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
    const userItem = await User.findOne({
      where: {
        key: "email",
        value: user.email,
      },
    });
    const userFound = await User.update(userItem.id, {
      avatar: `${DOMAIN}/${file.path}`,
    });
    res.status(200).send(userFound);
  } catch (error) {
    res.status(500).send(error);
  }
};
const findUserByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const user = await User.findAll({
      include: [
        {
          model: userType,
          as: "typeObj",
          map: "typeId",
        },
      ],
      where: {
        or: [
          { where: { key: "name", value: keyword, like:true } },
          { where: { key: "email", value: keyword, like:true } },
          { where: { key: "phone", value: keyword, like:true } },
        ]
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
