import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      setMobileMenuOpen(false);
    }
  };
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-none">
            <div className="flex items-center">
              <span className="font-bold text-2xl tracking-tight">
                Amazon clone<span className="text-yellow-400">.in</span>
              </span>
            </div>
          </Link>
          
          {/* Location */}
          <div className="hidden md:flex items-center text-sm ml-4">
            <MapPin className="h-4 w-4 mr-1" />
            <div>
              <div className="text-gray-300 text-xs">Deliver to</div>
              <div className="font-bold">India</div>
            </div>
          </div>
          
          {/* Search */}
          <form onSubmit={handleSearch} className="flex-grow">
            <div className="flex w-full">
              <div className="relative flex-grow flex">
                <select 
                  className="rounded-l-md py-2 h-10 pl-2 pr-8 text-sm text-gray-800 bg-gray-100 border-r border-gray-300 focus:outline-none hidden md:inline-block"
                  defaultValue="all"
                >
                  <option value="all">All</option>
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
                
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Amazon clone.in"
                  className="py-2 px-4 h-10 text-gray-800 w-full focus:outline-none md:rounded-none rounded-l-md flex-grow"
                />
                
                <button 
                  type="submit" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 rounded-r-md flex items-center justify-center"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
          
          {/* Account & Orders */}
          <nav className="flex items-center ml-4">
            <div className="hidden md:block mx-4">
              <div className="text-xs">Hello, sign in</div>
              <div className="font-bold flex items-center">
                Account & Lists <ChevronDown className="h-3 w-3 ml-1" />
              </div>
            </div>
            
            <div className="hidden md:block mx-4">
              <div className="text-xs">Returns</div>
              <div className="font-bold">& Orders</div>
            </div>
            
            {/* Cart */}
            <Link to="/cart" className="flex items-center ml-4 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
              <span className="ml-1 hidden md:inline font-bold">Cart</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="ml-4 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </div>
      
      {/* Category navigation */}
      <div className="bg-gray-800 py-2 px-4 overflow-x-auto">
        <div className="container mx-auto flex items-center space-x-4">
          <button className="flex items-center text-sm whitespace-nowrap">
            <Menu className="h-4 w-4 mr-1" /> All
          </button>
          
          <Link to="/" className="text-sm whitespace-nowrap hover:text-yellow-400">Today's Deals</Link>
          <Link to="/" className="text-sm whitespace-nowrap hover:text-yellow-400">Customer Service</Link>
          <Link to="/" className="text-sm whitespace-nowrap hover:text-yellow-400">Registry</Link>
          <Link to="/" className="text-sm whitespace-nowrap hover:text-yellow-400">Gift Cards</Link>
          <Link to="/" className="text-sm whitespace-nowrap hover:text-yellow-400">Sell</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-90 flex flex-col md:hidden">
          <div className="p-4 bg-gray-800 flex justify-between items-center">
            <span className="font-bold text-xl">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-gray-800 p-4 mb-4 rounded-md">
              <div className="flex items-center mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-bold">Hello, sign in</span>
              </div>
              <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md font-medium">
                Sign In
              </button>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Shop By Category</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link 
                      to={`/?category=${encodeURIComponent(category)}`}
                      className="block py-2 hover:text-yellow-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Help & Settings</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="block py-2 hover:text-yellow-400">Your Account</Link></li>
                <li><Link to="/" className="block py-2 hover:text-yellow-400">Customer Service</Link></li>
                <li><Link to="/" className="block py-2 hover:text-yellow-400">Sign Out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
 