import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbarStyles.css';

function Navigation() {
    const [userRecipes, setUserRecipes] = useState([]);
  
    useEffect(() => {
      // Fetch user-added recipes when the component mounts
      fetchUserRecipes();
    }, []);
  
    const fetchUserRecipes = async () => {
      try {
        const response = await fetch('/submission', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setUserRecipes(data);
        } else {
          console.error('Failed to fetch user-added recipes. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user-added recipes:', error);
      }
    };
    

    // console.log('User Recipes:', userRecipes); // Add this line to log the userRecipes state

  return (
    <Navbar bg="light" variant="light" expand="lg" className="navbar-custom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link as={Link} to="/recipe/rawBeef" className="nav-link-custom">Raw Beef</Nav.Link>
          <Nav.Link as={Link} to="/recipe/rawChicken" className="nav-link-custom">Raw Chicken</Nav.Link>
          <Nav.Link as={Link} to="/recipe/rawPork" className="nav-link-custom">Raw Pork</Nav.Link>
          <Nav.Link as={Link} to="/recipe/rawSalmon" className="nav-link-custom">Raw Salmon</Nav.Link>
          <Nav.Link as={Link} to="/recipe/rabbitStew" className="nav-link-custom">Rabbit Stew</Nav.Link>
          <Nav.Link as={Link} to="/recipe/mushroomStew" className="nav-link-custom">Mushroom Stew</Nav.Link>
          <Nav.Link as={Link} to="/recipe/beetrootStew" className="nav-link-custom">Beetroot Stew</Nav.Link>
          <Nav.Link as={Link} to="/submitrecipe" className="nav-link-custom">Submit Recipe</Nav.Link>
          <NavDropdown title="User Added Recipes" id="basic-nav-dropdown">
            {userRecipes.map(recipe => (
              <NavDropdown.Item key={recipe.id} as={Link} to={`/recipe/${recipe.id}`} className="nav-link-custom">
                {recipe.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={Link} to="/team" className="nav-link-custom">Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
