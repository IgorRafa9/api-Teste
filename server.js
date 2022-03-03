const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'https://localhost:8085'
}

app.use(cors(corOptions))

app.use(express.json())