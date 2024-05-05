import React from "react";

interface ProductDetailProps {
  img: string;
  title: string;
  desc: string;
  quantity: number;
  price: number;
  productId: number;
}

import Image from "next/image";
import Link from "next/link";
import Button from "../Common/Button/Button";
import image1 from "../../assets/image1.jpg"

const ProductDetail: React.FC<ProductDetailProps> = ({
  img,
  title,
  desc,
  quantity,
  price,
  productId,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Image
        src={img ? img : image1}
        alt={title}
        width={500}
        height={500}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-2">{desc}</p>
      <p className="text-gray-700 mb-2">Quantity: {quantity}</p>
      <p className="text-gray-700 mb-2">Price: ${price}</p>
      <Link href={`/products/${productId}`}>
        <Button
          className="btn btn-primary"
          onClick={() => console.log("Button clicked")}
        >
          More details
        </Button>
      </Link>
    </div>
  );
};

export default ProductDetail;
