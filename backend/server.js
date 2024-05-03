require("dotenv").config();
require("colors");
const express = require("express");
const {errorHandler} = require("./middleware/errorMiddleware")

const conectDB = require("./config/db")
const app = express();

conectDB();

app.use(express.json(), express.urlencoded({extended: false}));
app.use("/api/cars", require("./routes/carRouter"));
app.use('/api/users', require("./routes/userRouter"));
app.use('/api/messages', require("./routes/messageRouter"));
app.use(errorHandler);


let port = process.env.PORT || 3002;

app.listen(port, () => console.log(`conectado al puerto ${port}`));