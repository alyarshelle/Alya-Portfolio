import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';  // Ensure you import this line
import LandingPage from './App';
import MyCarousel from './Carousel';
import Navigation from './Navbar';
import GroceryList from './GroceryList';
import RawBeefPage from './RawBeef';

import rawBeef from './Images/rawBeef.png';
import rawChicken from './Images/rawChicken.png';
import rawPork from './Images/rawPork.png';
import rawSalmon from './Images/rawSalmon.png';
import rabbitStew from './Images/rabbitStew.png';
import beetrootStew from './Images/beetrootStew.png';
import mushroomStew from './Images/mushroomStew.png';

const images = [
    rawBeef,
    rawChicken,
    rawPork,
    rawSalmon,
    rabbitStew,
    beetrootStew,
    mushroomStew
];

describe('LandingPage Component', () => {
  it('renders without crashing', () => {
    render(<LandingPage />); // Renders the LandingPage component
  });

  it('renders landing page with header', () => {
    const { getByText } = render(<LandingPage />); // Renders the LandingPage component and gets elements by text
    
    // Verifies if the header element with specific text is in the document
    const headerElement = getByText(/A Balanced Gaming Diet/i);
    expect(headerElement).toBeInTheDocument();

    // Verifies if the subtitle element with specific text is in the document
    const subtitleElement = getByText(/Recipes for the Minecraft Gamer in You!/i);
    expect(subtitleElement).toBeInTheDocument();
  });
});

describe('MyCarousel Component', () => {
  test('renders without crashing', () => {
    render(<MyCarousel />); // Renders the MyCarousel component
  });

  test('renders the correct number of carousel items', () => {
    render(<MyCarousel />); // Renders the MyCarousel component
    const carouselItems = document.querySelectorAll('.carousel-item'); // Selects all carousel items
    expect(carouselItems.length).toBe(7); // Expects there to be 7 carousel items; adjust this number accordingly
  });

  test('renders each image with the correct alt text', () => {
    render(<MyCarousel />); // Renders the MyCarousel component
    const carouselImages = document.querySelectorAll('.carousel-image'); // Selects all carousel images
    carouselImages.forEach((image, index) => {
      // Expects each image to have the alt text "Slide" followed by its index
      expect(image.alt).toBe(`Slide ${index}`);
    });
  });

  test('advances automatically', async () => {
    render(<MyCarousel />); // Renders the MyCarousel component
    await waitFor(() => {
      // Expects the first slide to be displayed initially
      expect(screen.getByAltText(/Slide 0/)).toBeInTheDocument();
    });
    // Add your assertions for automatic advancement if applicable
  });

  test('advances when clicking the next arrow', async () => {
    render(<MyCarousel />); // Renders the MyCarousel component
    await waitFor(() => {
      // Expects the first slide to be displayed initially
      expect(screen.getByAltText(/Slide 0/)).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('button', { name: /Next/i })); // Simulates a click on the "Next" arrow
    await waitFor(() => {
      // Expects the second slide to be displayed after clicking the "Next" arrow
      expect(screen.getByAltText(/Slide 1/)).toBeInTheDocument();
    });
  });

  test('goes to the previous slide when clicking the previous arrow', async () => {
    render(<MyCarousel />); // Renders the MyCarousel component
    await waitFor(() => {
      // Expects the first slide to be displayed initially
      expect(screen.getByAltText(/Slide 0/)).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('button', { name: /Previous/i })); // Simulates a click on the "Previous" arrow
    await waitFor(() => {
      // Expects the last slide to be displayed after clicking the "Previous" arrow
      expect(screen.getByAltText(/Slide 6/)).toBeInTheDocument();
    });
  });
});

  describe('Grocery List Component', () => {
    test('renders grocery list with items', () => {
      const items = ['Apples', 'Bananas', 'Milk'];
      const { getByText } = render(<GroceryList items={items} />);
      
      items.forEach(item => {
        const itemElement = getByText(item);
        expect(itemElement).toBeInTheDocument();
      });
    });
    
    test('calls removeItem callback when remove button is clicked', () => {
      const items = ['Apples', 'Bananas', 'Milk'];
      const removeItemMock = jest.fn();
      const { getAllByText } = render(
        <GroceryList items={items} removeItem={removeItemMock} />
      );
    
      const removeButtons = getAllByText('Remove');
      removeButtons.forEach((button, index) => {
        fireEvent.click(button);
        expect(removeItemMock).toHaveBeenCalledWith(index);
      });
    });
    
    test('calls clearList callback when clear list button is clicked', () => {
      const clearListMock = jest.fn();
      const { getByText } = render(
        <GroceryList items={[]} clearList={clearListMock} />
      );
    
      const clearListButton = getByText('Clear List');
      fireEvent.click(clearListButton);
      expect(clearListMock).toHaveBeenCalled();
    });
    
    test('adds item to grocery list', () => {
      const itemName = 'Raw Beef'; // Example item name
      const addToGroceryListMock = jest.fn(); // Mock function to simulate addToGroceryList
      const { getByText } = render(
          <MemoryRouter>
              <RawBeefPage addToGroceryList={addToGroceryListMock} />
          </MemoryRouter>
      );
  
      const addButton = getByText(`Add ${itemName} to Grocery List`);
  
      fireEvent.click(addButton);
  
      expect(addToGroceryListMock).toHaveBeenCalledWith(expect.stringMatching(/raw beef/i));
  });
});

// Mock console.error to prevent it from throwing errors
console.error = jest.fn();

describe('Navigation Component', () => {
  test('renders navigation links correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const links = ['Home', 'Raw Beef', 'Raw Chicken', 'Raw Pork', 'Raw Salmon', 'Rabbit Stew', 'Mushroom Stew', 'Beetroot Stew', 'Team'];

    links.forEach(link => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });

  test('navigation links have correct hrefs', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const linksWithHrefs = [
      { text: 'Home', href: '/' },
      { text: 'Raw Beef', href: '/recipe/rawBeef' },
      { text: 'Raw Chicken', href: '/recipe/rawChicken' },
      { text: 'Raw Pork', href: '/recipe/rawPork' },
      { text: 'Raw Salmon', href: '/recipe/rawSalmon' },
      { text: 'Rabbit Stew', href: '/recipe/rabbitStew' },
      { text: 'Mushroom Stew', href: '/recipe/mushroomStew' },
      { text: 'Beetroot Stew', href: '/recipe/beetrootStew' },
      { text: 'Team', href: '/team' },
    ];

    linksWithHrefs.forEach(({ text, href }) => {
      expect(getByText(text).getAttribute('href')).toBe(href);
    });
  });
});