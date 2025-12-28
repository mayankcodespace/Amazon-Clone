import  { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface DealCardProps {
  title: string;
  discount: string;
  product: Product;
}

const DealCard = ({ title, discount, product }: DealCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="block relative">
      <div className="p-3 rounded-md hover:shadow-md transition-shadow">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full aspect-square object-contain mb-2"
        />
        
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
          {discount}
        </div>
        
        <h3 className="text-sm font-medium text-gray-800 truncate">
          {title}
        </h3>
        
        <p className="text-xs text-gray-600 mt-1 truncate">
          {product.name}
        </p>
      </div>
    </Link>
  );
};

export default DealCard;
 