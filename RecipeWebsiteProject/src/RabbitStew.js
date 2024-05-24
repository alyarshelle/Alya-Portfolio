// RabbitStewPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import RabbitStewImage from './Images/rabbitStew.png';
import { Link } from 'react-router-dom';


const RabbitStewPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Rabbit Stew Recipe</h1>
          </div>
          <img
            src={RabbitStewImage}
            alt="Rabbit Stew"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Rabbit stew is obtained from crafting the below ingredients together.<br />
            <b>Ingredients:</b> Cooked rabbit (obtained from cooking raw rabbit in a furnace), Carrot (obtained from a carrot plant), Baked Potato (obtained from cooking a potato in a furnace), any Mushroom (regular or mushroom found underground, on mushroom islands, shearing a brown or red mushroom cow, or in the Nether), a bowl, and fuel (coal, wood, kelp blocks etc.)<br />
            <b>Instructions:</b> Once you have obtained all the above ingredients, open up your crafting table to which you will see a 3x3 square. Place cooked rabbit in the top middle of the table. In the middel row, from left to right, place the carrot, baked potato, and your mushroom. Then, place you empty bowl beneath the potato. You will then have created your delicious rabbit stew!<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Rabbit stew will restore 10 hunger bars and 12 saturation points. Yummy!<br />
          </div>
          {/* Container for "Add to Grocery List" buttons */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Use Button component from react-bootstrap */}
            <Button onClick={() => addToGroceryList('cooked rabbit')} style={{ marginRight: '10px' }}>Add Cooked Rabbit to Grocery List</Button>
            <Button onClick={() => addToGroceryList('carrot')} style={{ marginRight: '10px' }}>Add Carrot to Grocery List</Button>
            <Button onClick={() => addToGroceryList('baked potato')} style={{ marginRight: '10px' }}>Add Baked Potato to Grocery List</Button>
            {/* Add the button to route to rabbitStewInstructions.js */}
            <Link to="/rabbitStewInstructions">
                <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RabbitStewPage;
