const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT

app.get('/', (req,res) => {
    res.send('Hello world');
})

app.get('/you', (req,res) => {
    res.send('<h1>HTML<h1>');
})

app.listen(PORT, () => {
    console.log(`Server start at ${PORT}`);
})