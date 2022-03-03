const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'https://localhost:8085'
}

//Middleware

app.use(cors(corOptions))

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//testing api

app.get('/', (req, res)=>{
  res.json({message: "Hello from api"})
});

//routers
const router = require('./routes/productRouter')
app.use('/api/products', router)

const PORT = process.env.PORT || 8085

//server
app.listen(PORT, ()=>{
  console.log("Servidor rodando na porta "+PORT);
})