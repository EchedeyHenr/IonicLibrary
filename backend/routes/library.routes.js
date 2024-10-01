module.exports = app => {
    const libraries = require("../controllers/library.controller.js");

    var router = require("express").Router();

    router.post("/", libraries.create);

    router.get("/", libraries.findAll);

    router.get("/:id", libraries.findOne);

    router.put("/:id", libraries.update);

    router.delete("/:id", libraries.delete);

    app.use("/api/libraries", router); 
};