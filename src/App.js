import React, { useEffect, useState } from 'react'
import './App.css';

import Recipe from './components/Recipe';

function App() {
const [recipes, setRecipes] =useState([])

  const keyAPI = '309c92bbcb8d4dccb2872594735a1c3a'
useEffect(() => {
   getRandomRecipes();
}, [])

const getRandomRecipes = async () => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=vegan&number=11&intolerances=glute&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=${keyAPI}`)
  const data = await response.json()
  console.log('data', data.results)
setRecipes(data)
}

  return (
    <div className="App">
      <input type="text" />
      <button type='submit'>Search</button>
      <Recipe />
    </div>
  );
}

export default App;
