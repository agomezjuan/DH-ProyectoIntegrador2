import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 

const RatingComment = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-comment-container p-4" style={{ marginLeft: '50px', marginRight: '50px' }}>
      <div className="flex items-start space-x-4">
        <img src="/path/to/default-profile-pic.jpg" alt="Perfil" className="w-16 h-16 rounded-full" />
        <div className="flex-1">
          <textarea className="w-full p-2 border rounded" placeholder="Escribe tu comentario aquí..."></textarea>
          <div className="flex items-center space-x-2 my-2">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    className="hidden"
                  />
                  <FaStar
                    className="cursor-pointer"
                    color={ratingValue <= (hover || rating) ? "#65a30d" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div>
          <button className="px-4 py-2 bg-[#65a30d] text-white rounded hover:bg-[#4d7c0f]">Enviar comentario</button>
        </div>
      </div>
    </div>
  );
}

export default RatingComment;
