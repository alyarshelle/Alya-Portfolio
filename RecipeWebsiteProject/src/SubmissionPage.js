import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'; // Import necessary components from React Router

function RecipeForm() {
  const [recipeData, setRecipeData] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  // eslint-disable-next-line
  const [submittedRecipe, setSubmittedRecipe] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Parse the recipe data string into a JavaScript object
      const parsedRecipeData = JSON.parse(recipeData);

      if (!isValidRecipe(parsedRecipeData)) {
        throw new Error('Invalid recipe format');
      }

      // Send the parsed recipe data to the server
      const response = await fetch('/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedRecipeData),
      });

      if (response.ok) {
        setSubmittedRecipe(parsedRecipeData);
        setRecipeData('');
        setSubmissionMessage('Submission Successful!');
        setTimeout(() => {
          setSubmissionMessage('');
        }, 3000);
      } else {
        const errorMessage = await response.text();
        console.error('Error:', errorMessage);
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('Parsing error: Malformed JSON data');
        setSubmissionMessage('Malformed JSON data. Please enter valid JSON.');
      } else {
        console.error('Error:', error);
      }
    }
  };

  const isValidRecipe = (recipe) => {
    return recipe && recipe.title && recipe.ingredients && recipe.instructions;
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1 style={{ color: '#fff' }}>Enter Your Recipe</h1>
          <Card className="p-3" style={{ backgroundColor: '#fff', color: '#b5651d', margin: 'auto', maxWidth: '500px' }}>
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder={`Enter JSON-like data in the following format: 
                {
                  "title": 
                  "description": 
                  "ingredients": 
                  "instructions": 
                  "howToEat":
                }`}
                value={recipeData}
                onChange={(event) => setRecipeData(event.target.value)}
                required
                rows={10}
                cols={50}
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <br />
              <button type="submit" style={{ backgroundColor: '#b5651d', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Submit</button>
            </form>
          </Card>
          {submissionMessage && <p style={{ color: 'green', marginTop: '10px' }}>{submissionMessage}</p>}
        </div>
      </div>
    </Router>
  );
}

export default RecipeForm;
