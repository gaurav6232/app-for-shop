import React from 'react';

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div className='w-full'>
      <h1 className='font-semibold text-zinc-1=800 text-lg '>products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}  className='w-full flex items-center justify-around h-10 bg-zinc-100 mt-2'>
              {product.name} - 
              <div>${product.price}</div>
              <button
                onClick={() => onDeleteProduct(product.id)}
                style={{ cursor: 'pointer', marginLeft: '10px' }}
              >
                ❌ {/* Cross symbol */}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='font-semibold text-zinc-100 text-lg  ml-6'>No Products Found.</p>
      )}
    </div>
  );
};

export default ProductList;
