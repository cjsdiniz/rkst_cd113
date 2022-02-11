import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json())

app.use(routes);
app.get("/",  (req, res)  => {
    return res.json({
            message: "Welcome!",
        })
    })
app.listen(3000, () => console.log("Server running on port 3000"));
