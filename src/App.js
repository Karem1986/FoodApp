import React, { useEffect, useState } from 'react'
import './App.css';

import Recipe from './components/Recipe';

function App() {
const [recipes, setRecipes] =useState([])

  const edamamKey = 'ae9876408dc528b2a2ad00a22514ecf1	'
  const edamanId = '77118711'

useEffect(() => {
   getRandomRecipes();
}, [])

async function getRandomRecipes () {
  try {
    const response = await fetch(`https://api.edamam.com/search?q=vegan&app_id=${edamanId}&app_key=${edamamKey}`)
    const data = await response.json()
    console.log(data.hits)
  setRecipes(data.hits)
  } catch (error) {
  console.log(error.message)
  }

}

if (recipes ) {
  return (
    <div className="App">
      <form>
      <input type="text" />
      <button type='submit'>Search</button>
      </form>

      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories.toString().slice( 0, -15)} ingredients={recipe.recipe.ingredients}/>
      ))}
    </div>
  );
}
return <h1>No data, sorryyy</h1>
}



export default App;
