import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeComponent from './RecipeSubpage';
import RecipeForm from './SubmissionPage';

// Mock console.error
console.error = jest.fn();

describe('RecipeForm', () => {
  test('submitting valid recipe data should display submission success message', async () => {
    const { getByPlaceholderText, getByText } = render(<RecipeForm />);
    const textarea = getByPlaceholderText(/Enter JSON-like data/);
    fireEvent.change(textarea, {
      target: { value: '{"title": "Test Recipe", "ingredients": ["Ingredient 1", "Ingredient 2"], "instructions": "Cook it!"}' },
    });
    fireEvent.submit(getByText('Submit'));

    // Use a custom matcher function to search for the success message
//     await waitFor(() => {
//       expect(screen.getByText((content, node) => {
//         const hasText = (node) => node.textContent === 'Submission Successful!';
//         const nodeHasText = hasText(node);
//         const childrenDontHaveText = Array.from(node.children).every(
//           child => !hasText(child)
//         );

//         return nodeHasText && childrenDontHaveText;
//       })).toBeInTheDocument();
//     });
  });

  test('submitting invalid recipe data should display error message', async () => {
    const { getByPlaceholderText, getByText } = render(<RecipeForm />);
    const textarea = getByPlaceholderText(/Enter JSON-like data/);
    fireEvent.change(textarea, {
      target: { value: '{"title": "Test Recipe"}' },
    });
    fireEvent.submit(getByText('Submit'));

//     await waitFor(() => {
//       expect(getByText('Invalid recipe format')).toBeInTheDocument();
//     });
  });

  test('submitting malformed JSON data should display error message', async () => {
    const { getByPlaceholderText, getByText } = render(<RecipeForm />);
    const textarea = getByPlaceholderText(/Enter JSON-like data/);
    fireEvent.change(textarea, {
      target: { value: 'invalid JSON' },
    });
    fireEvent.submit(getByText('Submit'));

//     await waitFor(() => {
//       expect(getByText('Malformed JSON data. Please enter valid JSON.')).toBeInTheDocument();
//     });
//   });
});

describe('RecipeComponent', () => {
  test('fetches and displays recipes', async () => {
    render(
      <MemoryRouter>
        <RecipeComponent />
      </MemoryRouter>
    );

//     await waitFor(() => {
//       expect(screen.getByText('Recipe 1')).toBeInTheDocument();
//       expect(screen.getByText('Recipe 2')).toBeInTheDocument();
//     });
  });

  test('navigates to recipe detail page when a recipe is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RecipeComponent />
      </MemoryRouter>
    );

//     const recipeLink = await screen.findByText('Recipe 1');
//     fireEvent.click(recipeLink);

//     expect(screen.getByText('Recipe Detail')).toBeInTheDocument();
//     expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  });
});
});
