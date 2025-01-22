const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const MessagesRouter = require("./router/MessagesRouter");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3001'
    })
);
app.use("/api", MessagesRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
