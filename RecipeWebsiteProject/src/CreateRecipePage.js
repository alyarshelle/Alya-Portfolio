import React, { useState } from 'react';

const CreateRecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [manualInput, setManualInput] = useState('');

  const parseAndSetRecipes = (data) => {
    try {
      const parsedRecipes = JSON.parse(data);
      setRecipes(parsedRecipes);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  const handleManualInput = (event) => {
    setManualInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    parseAndSetRecipes(manualInput); // Parse and set recipes when the form is submitted
  };

  return (

    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Input JSON Manually:</h3>
          <textarea
            rows="5"
            cols="50"
            value={manualInput}
            onChange={handleManualInput}
            placeholder="Paste JSON data here..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display the parsed recipes */}
      {recipes.length > 0 && (
        <div>
          <h3>Uploaded Recipes:</h3>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateRecipePage;
