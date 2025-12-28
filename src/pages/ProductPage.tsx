import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Check, AlertTriangle, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  // Check if product is already in cart
  const productInCart = cartItems.find(item => item.product.id === Number(id));
  const cartQuantity = productInCart ? productInCart.quantity : 0;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-md shadow-sm p-8 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center">
          <li>
            <Link to="/" className="hover:text-blue-600 hover:underline">Home</Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link 
              to={`/?category=${encodeURIComponent(product.category)}`}
              className="hover:text-blue-600 hover:underline"
            >
              {product.category}
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-800">{product.name.split(' ').slice(0, 3).join(' ')}...</span>
          </li>
        </ol>
      </nav>
      
      {/* Product Detail Section */}
      <div className="bg-white rounded-md shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-2/5 mb-6 md:mb-0">
            <div className="sticky top-20">
              <div className="mb-4 h-80 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-3/5 md:pl-8">
            <h1 className="text-xl md:text-2xl font-medium mb-2">{product.name}</h1>
            
            <div className="mb-4">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <Link to="#reviews" className="text-sm text-blue-600 hover:underline">
                  {product.reviews.toLocaleString('en-IN')} ratings
                </Link>
              </div>
            </div>
            
            <div className="border-t border-b py-4 my-4">
              <div className="mb-2">
                <span className="text-red-600 font-medium">-
                  {Math.round((product.oldPrice ? (product.oldPrice - product.price) / product.oldPrice * 100 : 0))}%
                </span>
                <span className="mx-2">|</span>
                <span className="text-gray-500">M.R.P.:</span>
                <span className="text-gray-500 line-through ml-1">
                  ₹{product.oldPrice?.toLocaleString('en-IN') || product.price.toLocaleString('en-IN')}
                </span>
              </div>
              
              <div className="flex items-baseline mb-1">
                <span className="text-gray-800">Price:</span>
                <span className="text-2xl font-medium ml-2">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="text-sm text-blue-600">
                FREE delivery
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">About this item:</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              {product.features && (
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Add to Cart Section */}
            <div className="border-t pt-4">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Check size={16} className="mr-1" />
                    <span className="text-sm">
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  {cartQuantity > 0 && (
                    <div className="text-sm text-blue-600">
                      {cartQuantity} in your cart
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-md shadow-sm text-sm font-medium flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-md border">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
 