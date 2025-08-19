const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors')
const userRouter = require('./routers/users');
const bookRouter = require('./routers/books');
const mongoose = require("mongoose");
const logerOne = require('./middleware/loger1');
const logerTwo = require('./middleware/loger2');
const bodyParser = require('body-parser');


dotenv.config();
const { PORT = 3000, API_URL = 'http://localhost', } = process.env;

mongoose.connect("mongodb+srv://2864tasha:secret123@cluster0.s8ntziv.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ Connection error:", err));

const app = express();


app.use(bodyParser.json());
app.use(logerOne);
app.use(logerTwo);
app.use(bookRouter);
app.use(userRouter);

app.use(cors);



app.listen(PORT, () => {
  console.log(`Сервер запущен: ${API_URL}:${PORT}`);
});



