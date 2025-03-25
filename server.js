const express = require("express");
const fs = require("fs");
const app = express("cors");
const PORT = 5005;
const cors = require("cors");

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Test route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

// Route to fetch JSON data
app.get("/data", (req, res) => {
    fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading JSON file" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
