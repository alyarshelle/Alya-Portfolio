import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import MyCarousel from './Carousel';
import RawBeefPage from './RawBeef';
import BeefInstructions from './beefInstructions';
import RawChickenPage from './RawChicken';
import ChickenInstructions from './chickenInstructions';
import RawPorkPage from './RawPork';
import PorkInstructions from './porkInstructions';
import RawSalmonPage from './RawSalmon';
import SalmonInstructions from './salmonInstructions';
import MushroomStewPage from './MushroomStew';
import MushroomStewInstructions from './mushroomStewInstructions';
import BeetrootStewPage from './BeetrootStew';
import BeetrootStewInstructions from './beetrootStewInstructions';
import RabbitStewPage from './RabbitStew';
import RabbitrootStewInstructions from './rabbitStewInstructions';
import TeamPage from './teamPage';
import Navigation from './Navbar';
import GroceryList from './GroceryList';
import SubmissionPage from './SubmissionPage';
import RecipeComponent from './RecipeSubpage'; // Import your RecipeComponent
import RecipeDetail from './RecipeDetail';


const App = () => {
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
      <Navigation />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/carousel" component={MyCarousel} />
        <Route path="/recipe/rawBeef" render={(props) => <RawBeefPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/beefInstructions" component={BeefInstructions} />
        <Route path="/recipe/rawChicken" render={(props) => <RawChickenPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/chickenInstructions" component={ChickenInstructions} />
        <Route path="/recipe/rawPork" render={(props) => <RawPorkPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/porkInstructions" component={PorkInstructions} />
        <Route path="/recipe/rawSalmon" render={(props) => <RawSalmonPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/salmonInstructions" component={SalmonInstructions} />
        <Route path="/recipe/mushroomStew" render={(props) => <MushroomStewPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/mushroomStewInstructions" component={MushroomStewInstructions} />
        <Route path="/recipe/beetrootStew" render={(props) => <BeetrootStewPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/beetrootStewInstructions" component={BeetrootStewInstructions} />
        <Route path="/recipe/rabbitStew" render={(props) => <RabbitStewPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/rabbitStewInstructions" component={RabbitrootStewInstructions} />
        <Route path="/recipe" render={() => <RecipeComponent />} />
        <Route path="/recipe/:id" render={(props) => <RecipeDetail {...props} />} />
        <Route path="/submitrecipe" render={(props) => <SubmissionPage {...props} addToGroceryList={addToGroceryList} />} />
        <Route path="/team" component={TeamPage} />
      </Switch>
      <GroceryList
        items={groceryItems}
        removeItem={removeFromGroceryList}
        clearList={clearGroceryList}
      />
    </Router>
  );
};

export default App;
