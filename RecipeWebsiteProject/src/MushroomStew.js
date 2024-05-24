// MushroomStewPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import MushroomStewImage from './Images/mushroomStew.png';
import { Link } from 'react-router-dom';


const MushroomStewPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Mushroom Stew Recipe</h1>
          </div>
          <img
            src={MushroomStewImage}
            alt="Rabbit Stew"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Mushroom stew is obtained from crafting the below ingredients together.<br />
            <b>Ingredients:</b> Red mushroom, Brown mushroom (regular or mushroom found underground, on mushroom islands, shearing a brown or red mushroom cow, or in the Nether), and a bowl<br />
            <b>Instructions:</b> Once you have obtained the above ingredient, open up your crafting table to which you will see a 3x3 square. Place the 2 mushrooms anywhere in the first two rows such that they are next to each other horizontally. Then, place you empty bowl beneath either of the mushrooms. You will then have created your delicious beetroot stew!<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Mushroom stew will restore 3 hunger bars and 7.2 saturation points. Yummy!<br />
          </div>
          {/* Container for "Add to Grocery List" buttons */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => addToGroceryList('red mushroom')} style={{ marginRight: '10px' }}>Add Red Mushroom to Grocery List</Button>
            <Button onClick={() => addToGroceryList('brown mushroom')} style={{ marginRight: '10px' }}>Add Brown Mushroom to Grocery List</Button>
              {/* Add the button to route to mushroomStewInstructions.js */}
              <Link to="/mushroomStewInstructions">
                <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default MushroomStewPage;
