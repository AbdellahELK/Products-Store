import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();
// show all products
router.get('/', getProducts)
// add product
router.post("/", createProduct);
// update product 
router.put("/:id", updateProduct)
// delete product
router.delete("/:id", deleteProduct)


export default router