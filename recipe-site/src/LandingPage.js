import React from 'react';
import spaghet from "./Images/spaghetti.png"

function LandingPage() {
    return (
        <div>
            <header>
                <h1>Welcome to Crafty Kitchen</h1>
                {/* <p>Discover mouth-watering recipes for every occasion!</p> */}
            </header>

            {/* <div className="container">
                <h2>Featured Recipes</h2>
            </div> THIS WILL BE POPULAR RECIPES ONCE I ADD A RATED SYSTEM*/}

            <div className="recipes">
                <div className="recipe-card">
                    <img src="spaghetti.png" alt="Spaghetti and Meatballs" className="recipe-image" />
                    <h3>Spaghetti and Meatballs</h3>
                    <p>Spaghetti and meatballs is a classic comfort food that's easy to make and tastes great!</p>
                </div>
                {/* <div className="recipe-card">
                    <img src="chicken_tacos.jpg" alt="Chicken Tacos" className="recipe-image" />
                    <h3>Chicken Tacos</h3>
                    <p>Chicken tacos are a quick and easy meal that's perfect for busy weeknights.</p>
                </div>
                <div className="recipe-card">
                    <img src="chocolate_chip_cookies.jpg" alt="Chocolate Chip Cookies" className="recipe-image" />
                    <h3>Chocolate Chip Cookies</h3>
                    <p>Chocolate chip cookies are a classic dessert that everyone loves.</p>
                </div> */}
            </div>

            <footer>
                <p>&copy; 2024 Crafty Kitchen</p>
            </footer>
        </div>
    );
}

export default LandingPage;
