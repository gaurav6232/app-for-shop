import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct, products }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicate product
    if (products.some(product => product.name === productName)) {
      alert('Product with this name already exists.');
      return;
    }

    // Format new product object
    const newProduct = {
      id: new Date().getTime().toString(),
      name: productName,
      price: parseFloat(price),
    };

    // Call parent function to add product
    onAddProduct(newProduct);

    // Reset form fields
    setProductName('');
    setPrice('');
  };

  return (
    <div className='w-full bg-zinc-300 min-h-52 flex flex-col items-center'>
      <h1 className='w-60 bg-gray-500 text-zinc-200 font-semibold text-lg p-1 mr-10 mt-2 rounded-md flex items-center justify-center'>Add Product</h1>
      <div className='w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <div className='w-96 mt-10'>
          <label>Product Name:</label>
          <input className='bg-transparent ml-2 border-solid border-2 border-zinc-700 rounded-md px-3'
            type="text"
            placeholder='Product Name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input className='bg-transparent ml-20 border-solid border-2 border-zinc-700 rounded-md mt-2 px-3'
            type="number"
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>
        <button className='w-80 h-10 bg-slate-700 text-zinc-300 text-lg font-semibold rounded-2xl mt-5' type="submit">Add</button>
      </form> 
      </div>
    </div>
  );
};

export default AddProductForm;
