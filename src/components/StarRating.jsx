import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center text-yellow-500">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={`full-${index}`} />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default StarRating;

const App = () => {
  return (
    <div>
      <h1>Rating: 4.8/5</h1>
      <StarRating rating={4.8} />
    </div>
  );
};


