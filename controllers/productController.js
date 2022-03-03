const { products } = require('../models');
const db = require('../models')

//criando o Model principal
const Product = db.products;
const Review = db.reviews;

//funciomento principal
//1. Criar os produtos

const addProd = async(req, res) => {
  let info = {
    id: req.body.id,
    prod: req.body.prod,
    preco: req.body.preco,
    descricao: req.body.descricao,
    publicacao: req.body.publicacao ? req.body.publicacao : false
  }

  const produto = await Product.create(info)
  res.status(200).send(produto)
  console.log(produto)
}

//2. Listas os produtos
const listarProd = async (req, res) => {

  let produtos = await Product.findAll({})
  res.status(200).send(produtos)

}


//3. Atualizar produto
const atualizarProd = async (req, res) => {

  let id = req.params.id
  
  const produto = await Product.update(req.body, {where: {id:id}})

  res.status(200).send(produto)

}

//4. Deletar produto por id
const deletarProd = async (req, res) => {

  let id = req.params.id  

  await Product.destroy({where: {id : id}})

  res.status(200).send('Produto deletado')

}


module.exports = {
  addProd,
  listarProd,
  atualizarProd,
  deletarProd
}