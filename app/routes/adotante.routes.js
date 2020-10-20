module.exports = app => {
    const tutorials = require("../controllers/adotante.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", adotante.create);
  
    // Retrieve all Tutorials
    router.get("/todos", adotante.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", adotante.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", adotante.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", adotante.delete);
  
    // Delete all Tutorials
    router.delete("/", adotante.deleteAll);
  
    app.use('/api/adotante', router);
  };