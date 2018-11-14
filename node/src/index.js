const express = require("express");
const path = require('path')
const app = express();

app.set('views', path.resolve(__dirname, '../../dist'))
app.set('view engine', 'html')

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.resolve(__dirname, '../../dist/')
    })
});

app.listen(8888, () => {
    console.log("hello");
});