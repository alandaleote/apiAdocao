module.exports = app => {
    const tutorials = require("../controllers/pet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pet.create);
  
    // Retrieve all Tutorials
    router.get("/todos", pet.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", pet.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pet.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pet.delete);
  
    // Delete all Tutorials
    router.delete("/", pet.deleteAll);
  
    app.use('/api/pet', router);
  };