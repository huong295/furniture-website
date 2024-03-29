// Import the ProductDetail component


// Sample product data
const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' },
  ];
import Link from 'next/link';

// Use the ProductDetail component
const ProductList = () => {
  return (
    <div className = 'p-4'>
        
    
      <ul>

        {products.map(product => (
          <li key={product.id}>
            {/* Using Next.js Link for client-side navigation */}
            {/* <Link legacyBehavior href={`/products/product-detail`}>
              <a>{product.name}</a>
            </Link> */}
          </li>
        ))}
    
      </ul>
    </div>
  );
};

export default ProductList;
