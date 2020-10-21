const router = require("express").Router();
const verify = require('../../config/auth');
const Adotante = require("../controllers/adotante.controller");

router.post("/adicionar", Adotante.create);
router.get("/todos", Adotante.findAll);
router.get("/buscar/:id", Adotante.findOne);
router.get("/pesquisar/:nome", Adotante.findByName);
router.put("/atualizar/:id", Adotante.update);
router.delete("/deletar/:id", Adotante.delete);
router.delete("/deletar/tudo", Adotante.deleteAll);

module.exports = router;