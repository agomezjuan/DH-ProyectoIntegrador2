import React from "react";
import './index.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const Carousel = () => {
  return (
    <div class="carousel__contenedor relative">
				<button aria-label="Anterior" className="carousel__anterior btn btn-white absolute top-32 transform -translate-y-1/2 -left-12">
        <FaChevronLeft size={15} className="text-primary" />
				</button>

    <div className="carousel rounded-box">
      <div class="carousel">

    <div className="carousel-item">
      <img src="\imagenes PI\Broccoli-Meal-Prep-Recipe.jpg" alt="Burger"className="w-72 h-72 rounded-full mx-auto" />
    </div>

    <div className="carousel-item">
      <img src="\imagenes PI\Creamy-Parmesan-Green-Beans-Casserole-with-Bacon.jpg" alt="Burger"className="w-72 h-72 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Creamy-Turkey-Meatballs-Recipe.jpg" alt="Burger" className="w-72 h-72 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Burger" className="w-72 h-72 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Broccoli-Meal-Prep-Recipe.jpg" alt="Brocoli" className="w-72 h-72 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Chicken"className="w-72 h-72 rounded-full mx-auto" />
    </div>
    <div className="carousel-item">
      <img src="\imagenes PI\Grilled-Lemon-Garlic-Chicken-Skewers-recipe.jpg" alt="Salad"className="w-72 h-72 rounded-full mx-auto" />
    </div>

    </div>
    </div>
    <div>
    <button aria-label="Siguiente" className="carousel__siguiente btn text-white absolute top-32 transform -translate-y-1/2 -right-12">
    <FaChevronRight size={15} className="text-primary" />
				</button>
        </div>
        </div>
    );
  };

