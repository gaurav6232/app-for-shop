import React, { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

import ProductList from './ProductList';
import AddProductForm from './AddproductForm';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
      console.log('Products saved to local storage:', products); 
    }
  }, [products]);

  const handleAddProduct = (newProduct) => {
    if (products.some(product => product.name === newProduct.name)) {
      alert('Product with this name already exists.');
      return;
    }
    
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
  };

    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
      };
    
      const handleLogout = () => {
        localStorage.removeItem('token'); 
        navigate('/'); 
      };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <div className='w-full h-16 bg-slate-50 flex justify-between p-2'>
      <h2>Home Page</h2>
      <SearchBar onSearch={handleSearch} />
      <button className='bg-red-300 px-6 rounded-md' onClick={handleLogout}>Logout</button> {/* Logout button */}
      </div>
      <div>

      </div>
      <AddProductForm onAddProduct={handleAddProduct} products={products} />
      <ProductList products={filteredProducts.length > 0 ? filteredProducts : products} onDeleteProduct={handleDeleteProduct} />

    </div>
  );
};

export default Home;
