import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { BrowserRouter as Route, Switch, Link, useLocation } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

function RecipeComponent() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch submitted recipes whenever the route changes
    fetchSubmittedRecipes();
  }, [location.pathname]); // Add location.pathname as a dependency

  const fetchSubmittedRecipes = async () => {
    try {
      const response = await fetch('/submission', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        console.error('Failed to fetch submitted recipes');
      }
    } catch (error) {
      console.error('Error fetching submitted recipes:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Switch>
          <Route exact path="/">
            <Card className="p-3">
              <div className="header">
                <h1>Recipes</h1>
              </div>
              <div style={{ marginBottom: '20px' }}>
                {recipes.map(recipe => (
                  <div key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <h3>{recipe.title}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </Card>
          </Route>
          {recipes.map(recipe => (
            <Route key={recipe.id} path={`/recipe/${recipe.id}`}>
              <RecipeDetail recipe={recipe} />
            </Route>
          ))}
        </Switch>
      </Container>
    </div>
  );
}

export default RecipeComponent;
