module.exports = app => {
    const ong = require("../controllers/ong.controller");
  
    var router = require("express").Router();

    router.post("/adicionar", ong.create);
    router.get("/todos", ong.findAll);
    router.get("/buscar/:id", ong.findOne);
    router.get("/buscar/:nome", ong.findByName);
    router.put("/atualizar/:id", ong.update);
    router.delete("/deletar/:id", ong.delete);
    router.delete("/deletar/tudo", ong.deleteAll);
  };