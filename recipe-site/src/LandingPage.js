// src/LandingPage.js
import React from 'react';
import Card from './Card';
import spaghet from './Images/spaghetti.png';
import './LandingPage.css';

function LandingPage() {
  const recipes = [
    {
      image: spaghet,
      title: 'Spaghetti and Meatballs',
      description: "Spaghetti and meatballs is a classic comfort food that's easy to make and tastes great!",
    },
    // Add more recipes here
  ];

  return (
    <div>
      <header>
        <h1>Welcome to Crafty Kitchen</h1>
      </header>

      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            image={recipe.image}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>

      <footer>
        <p>&copy; 2024 Crafty Kitchen</p>
      </footer>
    </div>
  );
}

export default LandingPage;
