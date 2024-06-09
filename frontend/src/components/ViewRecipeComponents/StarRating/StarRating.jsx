import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleSetRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= rating ? 'text-lime-700' : 'text-gray-400'}
            onClick={() => handleSetRating(index)}
          >
            <span className="fas fa-star"></span>
          </button>
        );
      })}
      <span> {rating}</span>
    </div>
  );
};

export default StarRating;
