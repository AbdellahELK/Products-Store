import { create } from 'zustand';

export const useProductsStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        // Field validation
        if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields" };
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        if (!res.ok) {
            return { success: false, message: "Failed to create product" };
        }

        const data = await res.json();
        if (data && data.data) {
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product created successfully" };
        } else {
            return { success: false, message: "Invalid response structure" };
        }
    },

    fetchProducts: async () => {
        const res = await fetch("/api/products");
        if (res.ok) {
            const data = await res.json();
            if (data) {
                set({ products: data });
            } else {
                console.error("Invalid response structure");
            }
        } else {
            console.error("Failed to fetch products");
        }
    },

    deleteProduct: async (id) => {
        const res = await fetch(`/api/products/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        if (!data) {
            return { success: false, message: "Failed to delete product" };
        }

        set((state) => ({
            products: state.products.filter((product) => product._id !== id)
        }));
        return { success: true, message: "Product deleted successfully" };
    },

    updateProduct: async (id, updatedProduct) => {
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        });

        if (!res.ok) {
            return { success: false, message: "Failed to update product" };
        }

        // Update the products state with the modified product
        set((state) => ({
            products: state.products.map((product) =>
                product._id === id ? { ...product, ...updatedProduct } : product
            )
        }));

        // Return success to trigger the modal close
        return { success: true, message: "Product updated successfully" };
    },

}));
