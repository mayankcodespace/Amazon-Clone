import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash, ShoppingCart, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  );
  
  const discount = cartItems.reduce((total, item) => {
    if (!item.product.oldPrice) return total;
    return total + ((item.product.oldPrice - item.product.price) * item.quantity);
  }, 0);
  
  const deliveryCharge = subtotal > 499 ? 0 : 40;
  const totalAmount = subtotal + deliveryCharge;
  
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };
  
  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      alert('Order Placed Successfully!');
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-md shadow-sm p-8 text-center">
          <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Browse our products and find something you like!
          </p>
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items List */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-md shadow-sm overflow-hidden mb-6">
            {/* Cart Header */}
            <div className="border-b px-6 py-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                </h2>
                <span className="text-gray-600">Price</span>
              </div>
            </div>
            
            {/* Cart Items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.product.id} className="px-6 py-4">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-32 mb-4 sm:mb-0">
                      <Link to={`/product/${item.product.id}`}>
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-20 h-20 object-contain"
                        />
                      </Link>
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-grow sm:pl-4">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div>
                          <Link 
                            to={`/product/${item.product.id}`} 
                            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                          >
                            {item.product.name}
                          </Link>
                          
                          <div className="text-sm text-green-600 mb-2">
                            In Stock
                          </div>
                          
                          <div className="flex items-center mb-2">
                            <div className="flex items-center mr-6">
                              <span className="text-sm text-gray-600 mr-2">Qty:</span>
                              <select
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.product.id, Number(e.target.value))}
                                className="border rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                {[...Array(10)].map((_, i) => (
                                  <option key={i} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                            
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center"
                            >
                              <Trash className="h-4 w-4 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="font-bold text-lg mt-2 sm:mt-0">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cart Subtotal */}
            <div className="bg-gray-50 px-6 py-4 text-right">
              <div className="font-bold text-lg">
                Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items): 
                <span className="ml-2">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
          
          {/* Saved for Later (can be implemented if needed) */}
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-md shadow-sm p-6">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)}):</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount:</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              
              <div className="flex justify-between text-sm">
                <span>Delivery:</span>
                <span>
                  {deliveryCharge === 0 
                    ? <span className="text-green-600">FREE</span>
                    : `₹${deliveryCharge.toLocaleString('en-IN')}`
                  }
                </span>
              </div>
              
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Order Total:</span>
                  <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
            
            {deliveryCharge === 0 && (
              <div className="text-green-600 text-sm mb-4 flex items-start">
                <span className="inline-block mr-2">✓</span>
                <span>Your order qualifies for FREE Delivery!</span>
              </div>
            )}
            
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-md shadow-sm text-sm font-medium flex items-center justify-center"
            >
              {isLoading ? (
                <span className="loader mr-2"></span>
              ) : null}
              Proceed to Buy
            </button>
            
            <div className="mt-4 text-xs text-gray-500">
              <div className="flex items-start mb-2">
                <AlertTriangle className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5 text-yellow-500" />
                <span>
                  Please verify your address before proceeding. Additional delivery charges may apply based on your location.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
 