// ParentComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import RawBeefPage from './rawBeef';
import RawChickenPage from './rawChicken';
import RawPorkPage from './rawPork';
import RawSalmonPage from './rawSalmon';
import MushroomStewPage from './mushroomStew';
import BeetrootStewPage from './beetrootStew';
import RabbitStewPage from './rabbitStew';
import GroceryList from './GroceryList';

const ParentComponent = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  const addToGroceryList = (item) => {
    const capitalizedItem = item.replace(/\b\w/g, (char) => char.toUpperCase());
    setGroceryItems([...groceryItems, capitalizedItem]);
  };

  const clearGroceryList = () => {
    setGroceryItems([]);
  };

  const removeFromGroceryList = (index) => {
    const updatedList = [...groceryItems];
    updatedList.splice(index, 1);
    setGroceryItems(updatedList);
  };

  return (
    <Router>
      <div>
        {/* Routes for different pages */}
        <Switch>
          <Route path="/mushroom-stew" render={(props) => <MushroomStewPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/raw-beef" render={(props) => <RawBeefPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/raw-chicken" render={(props) => <RawChickenPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/raw-pork" render={(props) => <RawPorkPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/raw-salmon" render={(props) => <RawSalmonPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/beetroot-stew" render={(props) => <BeetrootStewPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/rabbit-stew" render={(props) => <RabbitStewPage {...props} addToGroceryList={addToGroceryList} />} />
          <Route path="/" component={LandingPage} />
        </Switch>
        {/* Display grocery list */}
        <GroceryList
          items={groceryItems}
          removeItem={removeFromGroceryList}
          clearList={clearGroceryList}
        />
      </div>
    </Router>
  );
};

export default ParentComponent;
