import  { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  desc: string;
}

const CategoryCard = ({ title, image, desc }: CategoryCardProps) => {
  return (
    <Link
      to={`/?category=${encodeURIComponent(title)}`}
      className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
    >
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="aspect-square overflow-hidden mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm text-blue-600">{desc}</p>
    </Link>
  );
};

export default CategoryCard;
 