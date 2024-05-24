// RawPorkPage.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import rawPorkImage from './Images/rawPork.png';
import { Link } from 'react-router-dom';

const RawPorkPage = ({ addToGroceryList }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Raw Pork Recipe</h1>
          </div>
          <img
            src={rawPorkImage}
            alt="Raw Pork"
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> Porkchop is obtained from pigs or hoglins and by cooking raw porkchop.<br />
            <b>Ingredients:</b> Raw porkchop, fuel (coal, wood, kelp blocks etc.)<br />
            <b>Instructions:</b> Place raw porkchop in furnace/smoker along with fuel. After a few seconds, the raw porkchop will turn into porkchop.<br />
            <b>How to Eat:</b> Hold right click while selected in your hotbar. Pork will restore 8 hunger bars and 12.8 saturation points. Yummy!<br />
          </div>
          {/* Container for "Add to Grocery List" button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Use Button component from react-bootstrap */}
            <Button onClick={() => addToGroceryList('raw porkchop')} style={{ marginRight: '10px' }}>Add Raw Porkchop to Grocery List</Button>
            {/* Add the button to route to porkInstructions.js */}
            <Link to="/porkInstructions">
                <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RawPorkPage;
