import React, { useEffect } from 'react'
import { useProductsStore } from '../store/products'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products } = useProductsStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">All Products</h1>
      {products.length === 0 ? (<>
        <p className="text-center">No products found</p>
        <div className="text-center">
          <Link className='text-success' to="/create-product">Create product</Link>
        </div>
      </>
      ) : (

        <div className="row">
          {products?.map((product) => (
            <div className="col-md-4 mb-4" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage
