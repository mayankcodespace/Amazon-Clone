import  { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Gift, HelpCircle, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      {/* Back to top button */}
      <div className="bg-gray-800 py-3 text-center hover:bg-gray-700 cursor-pointer">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </button>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Press Releases</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Amazon clone Science</Link></li>
            </ul>
          </div>
          
          {/* Connect with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <Facebook size={16} className="mr-2" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <Twitter size={16} className="mr-2" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Sell on Amazon clone</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Sell under Amazon clone Accelerator</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Amazon clone Global Selling</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Become an Affiliate</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Advertise Your Products</Link></li>
            </ul>
          </div>
          
          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <ShoppingCart size={16} className="mr-2" />
                  Your Account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <CreditCard size={16} className="mr-2" />
                  Returns Centre
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <Gift size={16} className="mr-2" />
                  Purchase Protection
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <HelpCircle size={16} className="mr-2" />
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex justify-center mb-4">
            <span className="font-bold text-xl tracking-tight">
              Amazon clone<span className="text-yellow-400">.in</span>
            </span>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>© 1996-{new Date().getFullYear()}, Amazon clone.com, Inc. or its affiliates</p>
            <p className="mt-1">This is a demo clone created for educational purposes</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 