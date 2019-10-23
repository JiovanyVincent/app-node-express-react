const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req,res) =>{
    res.send('Hello ExpressJS');
});

const port = 8000, host = 'localhost';
app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
});