const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

const todoRoutes = require("./views/toDoRoutes")
 

dotenv.config();

connectDB();

const app = express();


app.get("/", (req, res) => {
    res.json("Hello World");
});

app.use("/api/todos", todoRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});
