module.exports = app => {
    const tutorials = require("../controllers/ong.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ong.create);
  
    // Retrieve all Tutorials
    router.get("/todos", ong.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", ong.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ong.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ong.delete);
  
    // Delete all Tutorials
    router.delete("/", ong.deleteAll);
  
    app.use('/api/ong', router);
  };