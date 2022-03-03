const productController = require('../controllers/productController')
const router = require('express').Router()

router.post('/addProduto', productController.addProd)
router.get('/listarProduto', productController.listarProd)
router.put('/:id', productController.atualizarProd)
router.delete('/:id', productController.deletarProd)

module.exports = router
