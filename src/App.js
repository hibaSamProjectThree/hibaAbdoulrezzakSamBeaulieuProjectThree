import './App.css';
import { useState, useEffect } from 'react';

import Recipe from './Recipe.js';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [userInput, setUserInput] = useState('');
  // const [healthLabel, setHealthLabel] = useState('');

  useEffect( () => {
    // Create a function to make API call, returning our json response
  const getRecipes = async () => {
    const appId = `2e78a96e`;
    const apiKey = `8ddc103305cb9fc9e1b06b55de4db3d1`;
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}&health=vegetarian&health=vegan`);
    const data = await response.json();
    setRecipes(data.hits);
  }
    setSearch();
    getRecipes();
  }, [search])

  const userSearch = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  return (
    <div className="App">
      <form action="submit">
        <label htmlFor="ingredientSearch">Search any ingredient...</label>
        <input
        type="text"
        id="ingredientSearch"
        placeholder="Enter ingredient here..."
        value={userInput}
        onChange={userSearch}
        />
        <button>Find Recipes</button>
      </form>
      {
        recipes.map( recipe => (
          <Recipe
            title={recipe.recipe.label}
            imgSrc={recipe.recipe.image}
            imgAlt={recipe.recipe.label}
            recipeUrl={recipe.recipe.url}
          />
        ))
      }
    </div>
  );
}

export default App;
