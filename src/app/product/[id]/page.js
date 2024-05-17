// app/product/[id]/page.js
"use client";
import { use } from "react";
import HeaderLayout from "../../components/HeaderLayout/HeaderLayout";

async function fetchProduct(id) {
  const res = await fetch(
    `https://hhdshopserver.azurewebsites.net/api/product/${id}`
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default function ProductDetail({ params }) {
  const product = use(fetchProduct(params.id));

  if (!product) {
    return <p>Product not found</p>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { addToCart } = useCart();

  return (
<div>

      <div className="header">
        <HeaderLayout />
      </div>
      <div className="container mx-auto p-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-64 h-64 object-cover mb-4 rounded"
        />
        <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
        <p className="mb-4">Price: ${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
</div>
</div>
  );
}
