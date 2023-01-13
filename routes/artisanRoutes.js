const express = require("express");
const artisanRouter = express.Router();

const artisanController = require("../controller/artisanContoller");

artisanRouter.post("/addArtisan", artisanController.addArtisan);

artisanRouter.get("/getAllArtisans", artisanController.getAllArtisans);

artisanRouter.get("/getAnArtisan/:id", artisanController.getAnArtisan);

artisanRouter.put("/updateArtisan/:id", artisanController.updateArtisan);

artisanRouter.delete("/deleteArtisan/:id", artisanController.deleteArtisan);

module.exports = artisanRouter;
