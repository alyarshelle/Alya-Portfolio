// RawChickenPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import rawChickenImage from './Images/rawChicken.png';
import { Link } from 'react-router-dom'; 

const RawChickenPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Raw Chicken Recipe</h1>
          </div>
          <img
            src={rawChickenImage}
            alt="Raw Chicken"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', height: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Chicken is obtained from chickens and by cooking raw chicken.<br />
            <b>Ingredients:</b> Raw chicken, fuel (coal, wood, kelp blocks etc.)<br />
            <b>Instructions:</b> Place raw chicken in furnace/smoker along with fuel. After a few seconds, the raw chicken will turn into chicken.<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Chicken will restore 8 hunger bars and 12.8 saturation points. So Yummy!<br />
          </div>
          {/* Container for "Add to Grocery List" button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Use Button component from react-bootstrap */}
            <Button onClick={() => addToGroceryList('raw chicken')} style={{ marginRight: '10px' }}>Add Raw Chicken to Grocery List</Button>
            {/* Add the button to route chickenInstructions.js */}
            <Link to="/chickenInstructions">
                <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RawChickenPage;
