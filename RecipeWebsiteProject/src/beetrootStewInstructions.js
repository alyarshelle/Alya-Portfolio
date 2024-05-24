// Import the necessary modules/components
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

import bench from './InstructionImages/CraftingBench.png';
import beets from './InstructionImages/Beets.png';
import beetStew from './InstructionImages/BeetStew.png';

// Keep track of all images and their blurbs on the landing page
const items = [
  { image: beets, blurb: 'Find some beets in the ground and farm them' },
  { image: bench, blurb: 'Craft a crafting bench and bowl from wood' },
  { image: beetStew, blurb: 'Combine 6 beets and a bowl in the crafting bench for Beetroot Stew' },
];

// Create a carousel to display the images and blurbs
function BeetrootStewInstructions() {
  const [index, setIndex] = useState(0); // Initialize state variable 'index' with initial value 0

  // Function to handle selection of carousel items
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex); // Update 'index' state variable with the selected index
  };

  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>Beetroot Stew Recipe</h1>
          </div>
          <div className="CarouselContainer"> {/* Container for the carousel */}
            <BootstrapCarousel activeIndex={index} onSelect={handleSelect}> {/* Bootstrap Carousel component */}
              {/* Mapping over 'items' array to render each image */}
              {items.map((item, idx) => (
                <BootstrapCarousel.Item key={idx}> {/* Carousel item */}
                  {/* Image element with source and alt attributes */}
                  <img
                    className="d-block w-100 carousel-image"
                    src={item.image} 
                    alt={`Slide ${idx}`} // Alt text for the image
                  />
                </BootstrapCarousel.Item>
              ))}
            </BootstrapCarousel>
            <div className="blurb-container"> {/* Container for the blurb */}
              <p>{items[index].blurb}</p> {/* Display blurb corresponding to the currently selected image */}
            </div>
            <div className="text-center">
              <Link to="/recipe/beetrootStew" className="btn btn-primary">Back to Blurb</Link>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default BeetrootStewInstructions;