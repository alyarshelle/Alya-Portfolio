// RawBeefPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import rawBeefImage from './Images/rawBeef.png';
import { Link } from 'react-router-dom';

const RawBeefPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Raw Beef Recipe</h1>
          </div>
          <img
            src={rawBeefImage}
            alt="Raw Beef"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', height: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Steak or cooked beef is a food item obtained from cows, mooshoroms, or from cooking raw beef.<br />
            <b>Ingredients:</b> raw beef, fuel (coal, wood, kelp blocks etc.)<br />
            <b>Instructions:</b> Place raw beef in furnace/smoker along with fuel. After a few seconds, the raw beef will turn into steak.<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Steak will restore 8 hunger bars and 12.8 saturation points. Yummy!
          </div>
          {/* Container for "Add to Grocery List" button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Use Button component from react-bootstrap */}
            <Button onClick={() => addToGroceryList('raw beef')} style={{ marginRight: '10px' }}>Add Raw Beef to Grocery List</Button>
            {/* Add the button to route to beefInstructions.js */}
            <Link to="/beefInstructions">
                <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RawBeefPage;