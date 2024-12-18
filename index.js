import express, { json } from "express";
import cors from "cors";
import { conn } from "./connection/Connection.js";
import { router } from "./routes/main.js";

conn();
const app = express();
app.use(json());

app.use(cors())

app.get("/", (req, res) => {
    res.send("server is running succacefully : ");
})

app.use("/api", router);

app.listen(4000, () => {
    console.log("server is running for localhost 4000 : ");
})