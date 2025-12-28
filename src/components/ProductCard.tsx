import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="block h-full product-card transition-all duration-300 p-3 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[100%] mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
      
      <h3 className="text-sm text-gray-800 line-clamp-2 mb-1">
        {product.name}
      </h3>
      
      <div className="flex items-center mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 ml-1">
          ({product.reviews.toLocaleString('en-IN')})
        </span>
      </div>
      
      <div className="flex items-baseline">
        <span className="text-lg font-medium">₹{product.price.toLocaleString('en-IN')}</span>
        {product.oldPrice && (
          <span className="text-xs text-gray-500 line-through ml-2">
            ₹{product.oldPrice.toLocaleString('en-IN')}
          </span>
        )}
      </div>
      
      {showAddToCart && (
        <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} mt-3`}>
          <button 
            onClick={handleAddToCart} 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-1 rounded-full text-sm"
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
 