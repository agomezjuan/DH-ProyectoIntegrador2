import React from "react";
import './index.css';

export const Carousel = () => {
  return (
    <div className="carousel rounded-box">
    <div className="carousel-item">
      <img src="\imagenes PI\Broccoli-Meal-Prep-Recipe.jpg" alt="Burger"className="w-60 h-60 rounded-full mx-auto" />
    </div>

    <div className="carousel-item">
      <img src="\imagenes PI\Creamy-Parmesan-Green-Beans-Casserole-with-Bacon.jpg" alt="Burger"className="w-64 h-64 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Creamy-Turkey-Meatballs-Recipe.jpg" alt="Burger" className="w-64 h-64 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Burger" className="w-64 h-64 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Broccoli-Meal-Prep-Recipe.jpg" alt="Brocoli" className="w-64 h-64 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Chicken"className="w-64 h-64 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Salad"className="w-64 h-64 rounded-full mx-auto" />
    </div>
    </div>

    );
  };

