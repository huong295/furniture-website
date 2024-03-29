// pages/index.js
import Layout from '../app/components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8">Welcome to my website</h1>
        <p className="mt-4">This is the main content of your homepage.</p>
      </div>
    </Layout>
  );
};

export default Home;
