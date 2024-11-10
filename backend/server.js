import express from 'express';
import dotenv from 'dotenv';
import ProductRoutes from './router/ProductRoutes.js';
import { connectDb } from './config/db.js';
import path from 'path'
dotenv.config();
connectDb();
const app = express()
app.use(express.json())

const __dirname = path.resolve()


app.use("/api/products", ProductRoutes)
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


// Connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
