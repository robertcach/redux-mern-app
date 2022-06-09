const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller")

const upload = require("./storage.config")

/* ROUTES */
router.get("/", productController.list)
router.post("/new-product", upload.single('image'), productController.create)
router.get("/product/:id", productController.detail);
router.delete("/product/:id", productController.delete);

module.exports = router