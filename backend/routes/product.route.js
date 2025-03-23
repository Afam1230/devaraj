import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
import upload from "../config/cloud.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", upload.single("image"), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
