const router = require("express").Router();
const pet = require("../controllers/pet.controller");

router.post("/adicionar", pet.create);
router.get("/todos", pet.findAll);
router.get("/buscar/:id", pet.findOne);
router.get("/especie/:especie", pet.findBySpecies);
router.get("/genero/:sexo", pet.findByGender);
router.get("/idade/:idade", pet.findByAge);
router.put("/atualizar/:id", pet.update);
router.delete("/deletar/:id", pet.delete);
router.delete("/deletar/tudo", pet.deleteAll);

module.exports = router;