import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { Container, Card } from 'react-bootstrap';
import Carousel from './Carousel';

const LandingPage = () => {

  const [groceryListWidth, setGroceryListWidth] = useState(
    localStorage.getItem('groceryListWidth') || 0
  );

  useEffect(() => {
    const groceryListElement = document.getElementById('groceryList');
    if (groceryListElement) {
      const width = groceryListElement.offsetWidth;
      setGroceryListWidth(width);
      localStorage.setItem('groceryListWidth', width);
    }
  }, []);

  const centerTextStyle = {
    textAlign: 'center',
  };
 
  // Rendering the LandingPage component
  return (
    // Div representing the LandingPage with background color and minimum height
    <div style={{ 
      backgroundColor: '#b5651d', 
      minHeight: '100vh', 
  }}>
    {/* Container component from React Bootstrap for layout */}
      <Container className="p-3">
        {/* Card component from React Bootstrap for containing content */}
        <Card className="p-3">
          {/* Header section with a title and subtitle */}
          <div className="header">
            <h1>A Balanced Gaming Diet</h1> {/* Main title */}
            <h3 style={centerTextStyle}>Recipes for the Minecraft Gamer in You!</h3> {/* Subtitle with center-aligned text */}
          </div>
          {/* Rendering the Carousel component */}
          <Carousel /> {/* Carousel component to display images */}
        </Card>
      </Container>
    </div>
  );
};


export default LandingPage;