import React from 'react';
import Layout from "@/app/components/Layout";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import ProductList from "@/app/components/ProductList/ProductList";

// export default function ProductDetailPage() {
//   return (
//     <React.Fragment>
//       <Layout>
//        <h1>Product detail</h1>
//       </Layout>
//     </React.Fragment>
//   );
// }

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}