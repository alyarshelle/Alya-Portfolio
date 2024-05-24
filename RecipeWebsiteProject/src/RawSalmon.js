// RawSalmonPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import rawSalmonImage from './Images/rawSalmon.png';
import { Link } from 'react-router-dom';

const RawSalmonPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Raw Salmon Recipe</h1>
          </div>
          <img
            src={rawSalmonImage}
            alt="Raw Salmon"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Salmon is obtained from fishing for salmon and by cooking raw salmon.<br />
            <b>Ingredients:</b> Raw salmon, fuel (coal, wood, kelp blocks etc.)<br />
            <b>Instructions:</b> Place raw salmon in furnace/smoker along with fuel. After a few seconds, the raw salmon will turn into salmon.<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Salmon will restore 6 hunger bars and 9.6 saturation points. Yummy!<br />
          </div>
          {/* Container for "Add to Grocery List" button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Use Button component from react-bootstrap */}
            <Button onClick={() => addToGroceryList('raw salmon')} style={{ marginRight: '10px' }}>Add Raw Salmon to Grocery List</Button>
            {/* Add the button to route to salmonInstructions.js */}
            <Link to="/salmonInstructions">
              <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
          </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RawSalmonPage;
