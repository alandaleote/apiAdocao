const router = require("express").Router();

const Ong = require("../controllers/ong.controller");

router.post("/adicionar", Ong.create);
router.get("/todos", Ong.findAll);
router.get("/buscar/:id", Ong.findOne);
router.get("/buscar/pets/:id", Ong.findPets);
router.get("/pesquisar/:nome", Ong.findByName);
router.put("/atualizar/:id", Ong.update);
router.delete("/deletar/:id", Ong.delete);
router.delete("/deletar/tudo", Ong.deleteAll);

module.exports = router;
