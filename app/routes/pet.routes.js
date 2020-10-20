module.exports = app => {
    const pet = require("../controllers/pet.controller");
  
    var router = require("express").Router();

    router.post("/adicionar", pet.create);
    router.get("/todos", pet.findAll);
    router.get("/buscar/:id", pet.findOne);
    router.put("/atualizar/:id", pet.update);
    router.delete("/deletar/:id", pet.delete);
    router.delete("/deletar/tudo", pet.deleteAll);
  };