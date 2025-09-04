const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routers/users");
const bookRouter = require("./routers/books");
const mongoose = require("mongoose");
const loger = require("./middleware/logerUrl");
const bodyParser = require("body-parser");

dotenv.config();
const { PORT, 
  API_URL,
  MONGO_URL,
 } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ Connection error:", err));

const app = express();

app.use(bodyParser.json());

app.use(loger);
app.use(bookRouter);
app.use(userRouter);

app.use(cors);

app.listen(PORT, () => {
  console.log(`Сервер запущен: ${API_URL}:${PORT}`);
});
