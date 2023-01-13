const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controller/orderController");

orderRouter.post("/addOrder", orderController.orderAnArtisan);

orderRouter.get("/getAllOrder", orderController.getAllArtisansOrder);

orderRouter.get("/getOrderByID/:id", orderController.getAnArtisanOrder);

orderRouter.put("/updateOrder/:id", orderController.updateOrder);

orderRouter.delete("/deleteOrder/:id", orderController.deleteOrder);

module.exports = orderRouter;
