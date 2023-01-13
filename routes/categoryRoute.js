const express = require("express");
const categoryRouter = express.Router();

const categoryController = require("../controller/categoriesController");

categoryRouter.post("/addCategory", categoryController.addCategory);

categoryRouter.get("/getAllCategory", categoryController.getAllCategories);

categoryRouter.get("/getCategoryByName/:name", categoryController.getCategoryByName);

categoryRouter.get("/getCategoryByGroup/:group", categoryController.getCategoryByGroup);

categoryRouter.get("/getCategoryByID/:id", categoryController.getCategoryByID);

categoryRouter.put("/updateCategory/:id", categoryController.updateCategory);

categoryRouter.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
