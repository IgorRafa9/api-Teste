const productController = require('../controllers/productController')
const router = require('express').Router()

router.post('/addProduto', productController.addProd)
router.get('/listarProduto', productController.listarProd)
router.get('/publicarProd', productController.publicarProd)

router.get('/:id', productController.listarUmProd)

router.put('/:id', productController.atualizarProd)
router.delete('/:id', productController.deletarProd)

module.exports = router
