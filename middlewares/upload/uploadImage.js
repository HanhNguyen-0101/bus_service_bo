const multer = require("multer");
const mkdirp = require("mkdirp");

const typeImageArr = [".png", ".gif", ".jpg"];
const uploadImage = (folder) => {
  mkdirp.sync(`./public/images/uploads/${folder}`);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/uploads/${folder}`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const index = typeImageArr.findIndex(
        (i) =>
          i ===
          file.originalname.slice(file.originalname.length - 4).toLowerCase()
      );
      if (index !== -1) {
        req.file = file;
        cb(null, true);
      } else {
        cb(new Error("I don't have a clue!"));
      }
    },
  });
  return upload.single(folder);
};

module.exports = {
  uploadImage,
};
