//As rotas do CRUD

const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProdutoController')
router.post('/', controller.inserir);
router.get('/', controller.listar);
router.put('/', controller.editar);
router.delete('/', controller.deletar);
module.exports = router;

