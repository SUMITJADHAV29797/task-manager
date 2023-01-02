const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
require("dotenv").config()
// midleware
app.use(express.static("./public"))
app.use(express.json())


// routes

app.use("/api/v1/tasks", tasks)
app.use(notFound)
const port = process.env.PORT || 3000

const start = async() => {
    try {
        console.log(process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("server is up"));
    } catch (error) {
        console.log(error);
    }
}
start()
