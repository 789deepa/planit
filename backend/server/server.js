require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const giftRoutes = require("./routes/giftRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.send("Planit API is running");
});

// Mount routes
app.use("/api", giftRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


