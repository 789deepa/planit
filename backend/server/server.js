const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Planit API is running");
});

const PORT = 5000;

app.post("/api/gifts", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Request recieved!",
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

