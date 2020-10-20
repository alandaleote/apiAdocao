module.exports = app => {
    const adotante = require("../controllers/adotante.controller");
  
    var router = require("express").Router();

    router.post("/adicionar", adotante.create);
    router.get("/todos", adotante.findAll);
    router.get("/buscar/:id", adotante.findOne);
    router.get("/buscar/:nome", adotante.findByName);
    router.put("/atualizar/:id", adotante.update);
    router.delete("/deletar/:id", adotante.delete);
    router.delete("/deletar/tudo", adotante.deleteAll);
  };