const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("toti");
});

app.listen(8080, () => {
    console.log("hello");
});
