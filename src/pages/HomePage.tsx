import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CategoryCard from '../components/CategoryCard';
import DealCard from '../components/DealCard';
import ProductCard from '../components/ProductCard';
import PrimePromo from '../components/PrimePromo';
import { products, categories } from '../data/products';
import { banners, categoriesPromo, deals } from '../data/banners';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const location = useLocation();
  
  useEffect(() => {
    // Get search params from URL
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else if (searchQuery) {
      // If there's a search query, don't change the category
    } else {
      setSelectedCategory('All Categories');
    }
    
    // Filter products based on category and search query
    let filtered = products;
    
    if (categoryParam && categoryParam !== 'All Categories') {
      filtered = filtered.filter(product => product.category === categoryParam);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [location.search]);
  
  return (
    <div className="container mx-auto px-4 py-4">
      {/* Main Carousel */}
      <div className="mb-8">
        <Carousel images={banners} />
      </div>
      
      {/* Category Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="inline-flex space-x-4 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categoriesPromo.map((category, index) => (
          <CategoryCard 
            key={index}
            title={category.title}
            image={category.image}
            desc={category.desc}
          />
        ))}
      </div>
      
      {/* Deal Section */}
      <div className="bg-white rounded-md shadow-sm p-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Today's Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((deal, index) => {
            const dealProduct = products.find(p => p.id === deal.productId);
            if (!dealProduct) return null;
            
            return (
              <DealCard 
                key={index}
                title={deal.title}
                discount={deal.discount}
                product={dealProduct}
              />
            );
          })}
        </div>
      </div>
      
      {/* Prime Promo */}
      <div className="mb-8">
        <PrimePromo />
      </div>
      
      {/* Product Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {selectedCategory === 'All Categories' 
            ? 'Popular Products' 
            : `${selectedCategory} Products`}
        </h2>
        
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-md shadow-sm p-8 text-center">
            <p className="text-lg text-gray-600 mb-4">
              No products found for your search criteria.
            </p>
            <button 
              onClick={() => setSelectedCategory('All Categories')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium"
            >
              View all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-md shadow-sm">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
 