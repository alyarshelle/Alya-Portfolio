import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

import './styles.css';

import rawBeef from './Images/rawBeef.png';
import rawChicken from './Images/rawChicken.png';
import rawPork from './Images/rawPork.png';
import rawSalmon from './Images/rawSalmon.png';
import rabbitStew from './Images/rabbitStew.png';
import beetrootStew from './Images/beetrootStew.png';
import mushroomStew from './Images/mushroomStew.png';

//keep track of all images and their blurbs on the landing page
const items = [
  { image: rawBeef, blurb: 'Raw beef can be used to breed and heal tamed wolves, lead them around, and make baby tamed wolves grow up faster by 10% of the remaining time.' },
  { image: rawChicken, blurb: 'Tamed cats have a 70% chance to give the player a gift as they wake up from a bed, and the gift has a 16.13% chance to be raw chicken.' },
  { image: rawPork, blurb: 'Piglins instantly pick up raw or cooked porkchops that are within 1 block of them, unless they have already picked up one within the last 10 seconds. Porkchops picked up are not dropped upon the piglin\'s death.' },
  { image: rawSalmon, blurb: 'A dolphin can be fed raw salmon to increase its trust of the player and cause it to interact with the player more often. However, unlike most other animal mobs, this does not cause them to breed.' },
  { image: rabbitStew, blurb: 'Eating rabbit stew leaves the player with an empty bowl, similar to mushroom stew, suspicious stew, and beetroot soup.' },
  { image: beetrootStew, blurb: 'Beetroot soup is an unstackable food item.' },
  { image: mushroomStew, blurb: 'Mushroom stew can be obtained by “milking” a mooshroom with an empty bowl. This is accomplished by using a bowl on a mooshroom. The bowl gets replaced by the mushroom stew item. There is no cooldown for doing so.' },
];

//create a carousel to display the images and blurbs
function MyCarousel() {
  const [index, setIndex] = useState(0); // Initialize state variable 'index' with initial value 0

  // Function to handle selection of carousel items
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex); // Update 'index' state variable with the selected index
  };

  return (
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
    </div>
  );
}
export default MyCarousel;