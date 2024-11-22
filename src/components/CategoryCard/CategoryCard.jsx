import { FaRegEye, FaStar } from "react-icons/fa";

const CategoryCard = ({ newses }) => {
  const {
    title,
    details,
    rating,
    total_view,
    author,
    thumbnail_url,
    others_info,
  } = newses;

  return (
    <div className="card border border-gray-200">
      {/* Thumbnail */}
      <figure className="h-[400px]">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Author Information */}
        <div className="flex items-center mb-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-700 line-clamp-3">{details}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center text-orange-500">
            <FaStar className="w-5 h-5" />
            <span className="ml-1">{rating.number} ({rating.badge})</span>
          </div>

          {/* Views */}
          <div className="text-gray-500 flex items-center">
            <FaRegEye className="w-5 h-5" />
            <span className="ml-1">{total_view}</span>
          </div>
        </div>

        {/* Read More Button */}
        <div className="card-actions justify-end mt-4">
          {others_info.is_todays_pick && (
            <span className="badge badge-primary">Today's Pick</span>
          )}
          {others_info.is_trending && (
            <span className="badge badge-secondary">Trending</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
