//Abertura do servidor

const express = require('express');
const cors = require('cors');
const app = require('../src/app');

app.use(cors());

app.get('/',  (req,res) => {
    res.send('Olá Task =)');
});

app.listen(3001);