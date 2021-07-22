import React, { useEffect } from 'react'
import './App.css';

function App() {
  //Random Recipes
  const keyAPI = '309c92bbcb8d4dccb2872594735a1c3a'
  // const randomRecipes = 'https://api.spoonacular.com/recipes/random'
  // const pastaRecipes = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${keyAPI}'
  // const vegetarianRecipes = 'https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=${keyAPI}'
  // const veganGlutenFreeRecipes = 'https://api.spoonacular.com/recipes/complexSearch?query=vegan&number=15&intolerances=gluten&apiKey=${keyAPI}'
useEffect(() => {
   getRandomRecipes();
}, [])

const getRandomRecipes = async () => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=vegan&number=10&intolerances=gluten&apiKey=${keyAPI}`)
  const data = await response.json()
  console.log('data', data)
}

  return (
    <div className="App">
      <input type="text" />
      <button type='submit'>Search</button>
    </div>
  );
}

export default App;
