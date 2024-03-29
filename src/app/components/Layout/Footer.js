// components/Footer.js
const Footer = () => {
    return (
      <footer className="py-4 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  