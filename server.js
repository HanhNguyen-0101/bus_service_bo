const express = require("express");
const path = require("path");
const cors = require("cors");
const { rootRouter } = require("./routers");

const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());

const publicPath = path.join(__dirname, "./public");
app.use('/public', express.static(publicPath));

app.use('/api/v1', rootRouter);

app.listen(process.env.PORT || PORT, async() => {
  console.log(`Server is working on http://localhost:${PORT}`);
  try {
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
