import  { Link } from 'react-router-dom';

const PrimePromo = () => {
  return (
    <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-bold mb-3">Amazon clone Prime</h2>
          <p className="mb-4">
            Fast, FREE delivery, exclusive deals, award-winning movies & TV shows with Prime
          </p>
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-medium"
            >
              Try Prime Free
            </Link>
            <Link
              to="/"
              className="inline-block bg-transparent hover:bg-white/10 border border-white px-4 py-2 rounded-md font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1563803835717-5748707f5d43?auto=format&fit=crop&q=80&w=400&h=300"
            alt="Amazon clone Prime Benefits"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500 opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-blue-500 opacity-20"></div>
    </div>
  );
};

export default PrimePromo;
 