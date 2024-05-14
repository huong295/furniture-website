// pages/index.js
'use client'
import Layout from "./components/Layout";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/ProductList/ProductList";
import { SessionProvider } from 'next-auth/react';
export default function App() {

    return (
      <SessionProvider > 
        <AppLayout />
      </SessionProvider>
    );
}

function AppLayout() {
  return (
    <center>
      <Layout>
        <Banner />
        <ProductList />
      </Layout>
    </center>
  );
}