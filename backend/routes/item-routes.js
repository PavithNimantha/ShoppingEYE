const express = require("express");
const router = express.Router();
const Item = require("../model/Item");
const itemsController = require("../controllers/items-controller");

router.get("/", itemsController.getAllItems);
router.post("/", itemsController.addItem);
router.get("/:id", itemsController.getById);
router.put("/:id", itemsController.updateItem);
router.delete("/:id", itemsController.deleteItem);

module.exports = router;
