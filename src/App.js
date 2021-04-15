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
    })
  }

  // function to track user's entry in search bar
  const userSearch = (e) => {
    setUserInput(e.target.value);
  }

  // event handler for user pressing submit button
  const onSubmit = e => {
    e.preventDefault(); 
    setUserInput(search);
    getRecipes();
    setSearch('');
  }

  // A function to toggle user's selection for health labels (ie: veg, vegan, gluten-free...)
  const handleHealthLabel = (e) => {
    setHealthLabel(e.target.value);
  }

  return (
    <div className="App">
      <Header />
        
      <form className="searchBar" onSubmit={onSubmit} action="submit">
        <div className="wrapper">
          <label htmlFor="ingredientSearch" className="visuallyHidden">Search any ingredient...</label>
          <input 
          className="inputText" 
          type="text"
          id="ingredientSearch"
          placeholder="Enter ingredient or recipe here..."
          value={userInput}
          onChange={userSearch}
          />
          <div className="checkboxForm" onChange={handleHealthLabel}>
            <div>
              <input type="checkbox" id="vegetarian" value="vegetarian"/>
              <label htmlFor="vegetarian">Vegetarian</label>
            </div>
            <div>
              <input type="checkbox" id="vegan" value="vegan"/>
              <label htmlFor="vegan">Vegan</label>
            </div>
            <div>
              <input type="checkbox" id="gluten-free" value="gluten-free"/>
              <label htmlFor="gluten-free">Gluten-Free</label>
            </div>
          </div>
          <button>Find Recipes</button>
        </div>
      </form>

      <section className="recipes">
        <div className="wrapper">
          <div className="gridContainer">
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
        </div>
      </section>
      <footer>
        <p> Made at <a href="https://junocollege.com/" className="footerLink">Juno College ©</a> 2021 with the <a href="https://www.edamam.com/" className="footerLink">Edamam API</a></p>
      </footer>
    </div>
  );
}

export default App;
