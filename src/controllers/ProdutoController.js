const models = require('../models');

module.exports = {
    //CREATE do CRUD
    async inserir(req, res) {
        try {
            const produto = await models.Produto.create(req.body);
            return res.status(201).json({
                produto
              });
        } catch(error){
            return res.status(500).json({error: error.message})
        }
       
    },
    //READ do CRUD
    async listar(req, res) {
        try {
            const produto = await models.Produto.findAll();
            return res.status(201).json({
                produto
              });
        } catch(error){
            return res.status(500).json({error: error.message})
        }
    },
    //UPDATE do CRUD
    async editar(req, res) {
        try {
            const {id, action} = req.body;
            const produto = await models.Produto.findOne({
                where: {
                    id: id
                }
            })
            if(action == 1){
                const increment = await produto.increment("qtde",{
                    by: 1
                })
            } else if(action == 2){
                const increment = await produto.decrement("qtde",{
                    by: 1
                })
            } else {
                throw new Error('Operação inválida!')
            }
            return res.status(201).json({
                produto
              });
        } catch(error){
            return res.status(500).json({error: error.message})
        }
    },
    //DELETE do CRUD
    async deletar(req, res) {
        try {
            const { id } = req.body;
            const deleter = await models.Produto.destroy({
              where: { id: id }
            });
            if (deleter) {
              return res.status(204).send("Produto Deletado!");
            }
            throw new Error("Produto não deletado");
          } catch (error) {
            return res.status(500).send(error.message);
          }
    },
}