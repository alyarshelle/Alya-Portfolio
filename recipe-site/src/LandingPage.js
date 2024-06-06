// src/LandingPage.js
import React from 'react';
import Card from './Card';
import spaghet from './Images/spaghetti.png';
import chicktaco from './Images/chicktacos.png';
import chipcookie from './Images/chocochip.png';
import redvelvet from './Images/redvelvet.png';
import tsochicken from './Images/tsochicken.png';
import potatoes from './Images/potatoes.png';
import chickpeacurry from './Images/chickpeacurry.png';
import eggrollbowl from './Images/eggrollinbowl.png';
import './LandingPage.css';

function LandingPage() {
  const recipes = [
    {
      image: spaghet,
      title: 'Spaghetti and Meatballs',
      description: "Spaghetti and meatballs is a classic comfort food that's easy to make and tastes great!",
    },

    {
        image: chicktaco,
        title: 'Chicken Tacos',
        description: "Chicken tacos are a quick and easy meal that's perfect for busy weeknights.",
    },

    {
        image: chipcookie,
        title: 'Chocolate Chip Cookies',
        description: "Chocolate chip cookies are a delicious treat that everyone loves!",
    },

    {
        image: tsochicken,
        title: 'General Tso Chicken',
        description: "General Tso chicken is a popular Chinese takeout dish that's easy to make at home.",
    },

    {
        image: potatoes,
        title: 'Mashed Potatoes',
        description: "Mashed potatoes are a classic side dish that pairs well with a variety of main courses.",
    },

    {
        image: redvelvet,
        title: 'Red Velvet Cake',
        description: "Red velvet cake is a classic dessert that's perfect for any occasion.",
    },

    {
        image: chickpeacurry,
        title: 'Chickpea Curry',
        description: "Chickpea curry is a flavorful vegetarian dish that's easy to make and tastes great!",
    },

    {
        image: eggrollbowl,
        title: 'Egg Roll in A Bowl',
        description: "Egg roll in a bowl is a quick and easy meal that's packed with flavor!",
    },

  ];

  return (
    <div>
      <header>
        <h1>Welcome to Crafty Kitchen</h1>
      </header>
      <h2>Popular Recipes</h2>
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

      <h2>Recently Viewed</h2>

      <div className="recipes">
      </div>

      <footer>
        <p>&copy; 2024 Crafty Kitchen</p>
      </footer>
    </div>
  );
}

export default LandingPage;
