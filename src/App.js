import './App.css';
import { useState } from 'react';
import axios from 'axios';

import Header from './Header.js';
import Recipe from './Recipe.js';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [userInput, setUserInput] = useState('');
  const [healthLabel, setHealthLabel] = useState('vegetarian');
    
  // Create a function to make API call, returning our json response
  const getRecipes = async () => {
    const appId = `1b187461`;
    const apiKey = `3c7b092070c20c5d6c7d0e01a6d9fb01`;
    axios({
      url: `https://api.edamam.com/search`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        q: userInput,
        app_id: appId,
        app_key: apiKey,
        health: healthLabel
      }
    })
    .then( (res) => {
      setRecipes(res.data.hits);
      console.log(res.data.hits);
    })
  }

  const userSearch = (e) => {
    setUserInput(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault(); 
    setUserInput(search);
    getRecipes();
    setSearch('');
  }

  const handleHealthLabel = (e) => {
    setHealthLabel(e.target.value);
  }

  return (
    <div className="App">
   
      <Header />
      <form className="searchBar" onSubmit={onSubmit} action="submit">
        <label htmlFor="ingredientSearch">Search any ingredient...</label>
        <input 
        className="inputText" 
        type="text"
        id="ingredientSearch"
        placeholder="Enter ingredient here..."
        value={userInput}
        onChange={userSearch}
        />
        <form className="checkboxForm" onChange={handleHealthLabel}>
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
        <button>Find Recipes</button>
      </form>
   
     <div className="flexContainer">
      { 
     
       
        recipes.map( recipe => (
   
          <div className="recipeCard">
            <Recipe
              title={recipe.recipe.label}
              imgSrc={recipe.recipe.image}
              imgAlt={recipe.recipe.label}
              recipeUrl={recipe.recipe.url}
            />
          </div>
        
     
        ))
      }
        </div>
    </div>
  );
}

export default App;
