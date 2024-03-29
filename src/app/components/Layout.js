// Layout.js
import Sidebar from "./Sidebar/Sidebar";
import Head from "next/head";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";


const Layout = ({ children }) => {


  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-[#03344F] py-4">
        <div className="container mx-auto px-4">
          {/* Your header content goes here */}
          <Header />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="bg-[#F2F5FF] w-1/4 py-4">
          {/* Your sidebar content goes here */}
          <Sidebar />
        </aside>
        <main className="flex-1">
          {/* Your main content goes here */}
          <Banner/>
          <ProductList />
          
        </main>
      </div>
      <footer className="bg-[#03344F] py-4">
        <div className="container mx-auto px-4">
          {/* Your footer content goes here */}
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
