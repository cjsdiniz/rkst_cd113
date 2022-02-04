import express from "express";
import "reflect-metadata";

const app = express();

app.get("/",  (req, res)  => {
    return res.json({
            message: "Welcome!",
        })
    })
app.listen(3000, () => console.log("Server running on port 3000"));