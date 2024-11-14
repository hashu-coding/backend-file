import express, { json } from "express";
import { conn } from "./connection/Connection.js";
import { router } from "./routes/main.js";

conn();
const app = express();
app.use(json());

app.get("/", (req, res) => {
    res.send("server is running succacefully : ");
})

app.use("/api", router);

app.listen(3700, () => {
    console.log("server is running for localhost 3700 : ");
})