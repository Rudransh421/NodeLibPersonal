const express = require('express');
const app = express();

const path =require('path');
const publicpath = path.join(__dirname,'public');

app.use(express.static(publicpath));

app.listen(5000);