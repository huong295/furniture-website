// components/ProductDetail.js

import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="w-full h-48 object-cover md:w-48" src={product.image} alt={product.name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.name}</h2>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <div className="mt-4">
            <span className="text-gray-500">Price: </span>
            <span className="text-gray-900 font-semibold">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
