import React from 'react';
import BeetrootStewImage from './Images/beetrootStew.png';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const beetrootStew = ({ addToGroceryList }) => {
    return (
        <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
            <Container className="p-3">
                <Card className="p-3">
                    <div className="header">
                        <h1>Beetroot Stew Recipe</h1>
                    </div>
                    <img
                        src={BeetrootStewImage}
                        alt="Beetroot Stew"
                        style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
                    />
                    <div style={{ marginBottom: '20px' }}>
                        <b>Description:</b> Beetroot stew is obtained from crafting the below ingredients together.<br />
                        <b>Ingredients:</b> 6 beetroots (obtained from beetroot plant) and a bowl<br />
                        <b>Instructions:</b> Once you have obtained the above ingredient, open up your crafting table to which you will see a 3x3 square. Place
                        the beetroots completely in the first two rows so that the crafting table is 2/3 full of beetroots. Then, place you empty bowl beneath the beetroot
                        in the middle of the second row. You will then have created your delicious beetroot stew!<br />
                        <b>How to Eat:</b> Hold right click while selected in your hotbar. Beetroot stew will restore 3 hunger bars and 7.2 saturation points. Yummy!<br />
                    </div>
                    {/* Container for "Add to Grocery List" buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* Use Button component from react-bootstrap */}
                        <Button onClick={() => addToGroceryList('beetroot')} style={{ marginRight: '10px' }}>Add Beetroot to Grocery List</Button>
                        {/* Add the button to route to beetrootStewInstructions.js */}
                        <Link to="/beetrootStewInstructions">
                            <Button style={{ marginRight: '10px' }}>Go to Instructions</Button>
                        </Link>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default beetrootStew;