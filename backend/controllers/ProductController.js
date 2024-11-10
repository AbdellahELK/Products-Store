import Product from "../models/ProductModel.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body; // user will send this data

        if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }
        const product = new Product(newProduct);
        await product.save();
        res.status(201).json({ success: true, data: product });

    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const newPord = req.body;
        const product = await Product.findByIdAndUpdate(productId, newPord, { new: true });
        if (!product || !mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(404).json({ success: "false", message: "Product not found OR Id you provide is Invalid" });
        }
        res.status(201).json({ success: "true", message: product })
    } catch (error) {
        res.status(500).json({ success: "false", message: "server error" })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(404).json({ success: "false", message: "Id you provide is Invalid" });
        }
        const product = await Product.findByIdAndDelete(productId)
        res.status(200).json({ success: true, data: product })
    } catch (error) {
        res.status(500).json({ success: "false", message: "server error" })
    }
}