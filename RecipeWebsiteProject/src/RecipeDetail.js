import React from 'react';
import { Container, Card } from 'react-bootstrap';
import yum from './Images/yummy.jpg';

const RecipeDetail = ({ recipe }) => {
  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
      <Container className="p-3">
        <Card className="p-3">
          <div className="header">
            <h1>{recipe.title}</h1>
          </div>
          <img
            src={yum}
            alt={"ready to eat"}
            style={{ display: 'block', margin: 'auto', marginBottom: '20px', maxHeight: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <b>Description:</b> {recipe.description}<br />
            <b>Ingredients:</b> {recipe.ingredients}<br />
            <b>Instructions:</b> {recipe.instructions}<br />
            <b>How to Eat:</b> {recipe.howToEat}<br />
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default RecipeDetail;
