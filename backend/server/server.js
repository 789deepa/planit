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
  console.log("Received data:", req.body);

  res.json({
    gifts: [
      {
        id: 1,
        name: "Handmade Photo Album",
        instructions: "Collect photos and decorate each page with memories."
      },
      {
        id: 2,
        name: "Personalized Mug",
        instructions: "Print their favorite photo or quote on a mug."
      },
      {
        id: 3,
        name: "DIY Memory Jar",
        instructions: "Fill a jar with handwritten memories."
      }
    ]
  });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

