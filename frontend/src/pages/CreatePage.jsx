import React, { useState } from 'react';
import { useProductsStore } from '../store/products';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        image: ""
    })
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const { createProduct } = useProductsStore();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { success, message } = await createProduct(product);
        if (success) {
            console.log(message)
        } else {
            console.log(message)
        }
        setProduct("")
        navigate("/")
    };

    return (
        <>
            <h1 className="m-5">Create product</h1>
            <form onSubmit={handleSubmit}>
                <div className="m-5">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
                        onChange={handleChange}
                        value={product.name}
                    />
                </div>
                <div className="m-5">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="price"
                        name="price"
                        onChange={handleChange}
                        value={product.price}
                    />
                </div>
                <div className="m-5">
                    <label htmlFor="productDescription" className="form-label">Product Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        onChange={handleChange}
                        value={product.description}
                        placeholder="description"
                    ></textarea>
                </div>
                <div className="m-5">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="image URL"
                        name="image"
                        onChange={handleChange}
                        value={product.image}
                    />
                </div>
                <div className="m-5">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        </>
    );
};

export default CreatePage;
