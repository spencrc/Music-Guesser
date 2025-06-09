import express from "express";
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api", (_req, res) => {
    res.send("Hello from express!")
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));