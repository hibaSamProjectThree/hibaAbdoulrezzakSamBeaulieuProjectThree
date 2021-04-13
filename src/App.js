import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
      axios({
        url: `https://api.edamam.com/search`,
        method: `GET`,
        dataResponse: `json`,
        params: {
          q: userInput,
          app_id: appId,
          app_key: apiKey,
        }
      })
      .then( (res) => {
       setRecipes(res.data.hits)
      })
  }
    getRecipes();
  }, [userInput])


  const userSearch = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  }

   const onSubmit = e => {
    e.preventDefault(); 
    setUserInput(search);
    setSearch('');
  }


  return (
    <div className="App">
    <>
      <form onSubmit={onSubmit} action="submit">
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
  </>

  <>
    <form>
      <input type="checkbox" id="vegetarian"
      name="contact" value="vegetarian"/>
      <label htmlFor="vegetarian">Vegetarian</label>

      <input type="checkbox" id="vegan"
      name="contact" value="vegan"/>
      <label htmlFor="vegan">Vegan</label>

      <input type="checkbox" id="gluten-free"
      name="contact" value="gluten-free"/>
      <label htmlFor="gluten-free">Gluten-Free</label>
      </form>
    </>


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
