import React, { useState } from 'react'
import { useProductsStore } from '../store/products'

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductsStore()
  const [showModal, setShowModal] = useState(false)
  const [updateProd, setUpdateProd] = useState(product)

  const handleDelete = async (id) => {
    const { success, message } = await deleteProduct(id)
    console.log(success, message)
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };
  const handleUpdate = async (id, updateProd) => {
    const { success, message } = await updateProduct(id, updateProd)
    console.log(success, message)
    if (success) {
      setShowModal(false);
    }
  }

  return (
    <div className="card h-100">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">Price: ${product.price}</p>
        <button className="btn btn-primary mt-2" onClick={openModal}>Update</button>
        <button className="btn btn-danger m-2" onClick={() => handleDelete(product._id)}>Delete</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ display: showModal ? "block" : "none" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body ">

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    className="form-control"
                    onChange={(e) => { setUpdateProd({ ...updateProd, image: e.target.value }) }}
                    value={updateProd.image}
                    placeholder="Enter image URL"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={(e) => { setUpdateProd({ ...updateProd, name: e.target.value }) }}
                    value={updateProd.name}
                    placeholder="Enter product name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="form-control"
                    onChange={(e) => { setUpdateProd({ ...updateProd, price: e.target.value }) }}
                    value={updateProd.price}
                    placeholder="Enter product price"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    onChange={(e) => { setUpdateProd({ ...updateProd, description: e.target.value }) }}
                    value={updateProd.description}
                    placeholder="Enter product description"
                    rows="3"
                  />
                </div>
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button> */}
                <button type="button" className="btn btn-primary" onClick={() => handleUpdate(product._id, updateProd)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard
