'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
 // Replace 'path/to/Button' with the actual path to the Button component.

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://hhdshopserver.azurewebsites.net/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {(products).map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <Link legacyBehavior href={`/product/${product.id}`}>
            <div>
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <div>
             
              </div>
              <div className = "flex justify-between items-center p-4">
              <p className="text-gray-500">{product.price} VND</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">More details</button>
              </div>
              
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
