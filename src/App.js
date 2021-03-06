import React, { useEffect, useState } from 'react'
import './App.css';

import Recipe from './components/Recipe';

function App() {
const [recipes, setRecipes] =useState([])
const [ search, setSearch ] = useState("")
const [onSearchClick, setOnSearchClick ] = useState("vegan")

  const edamamKey = 'ae9876408dc528b2a2ad00a22514ecf1	'
  const edamanId = '77118711'

// async function getRandomRecipes () {
//   try {
//     const response = await fetch(`https://api.edamam.com/search?q=${onSearchClick}&app_id=${edamanId}&app_key=${edamamKey}`)
//     const data = await response.json()
//     console.log(data.hits)
//   setRecipes(data.hits)
//   } catch (error) {
//   console.log(error.message)
//   }

// }
useEffect(() => {
  async function getRandomRecipes () {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${onSearchClick}&app_id=${edamanId}&app_key=${edamamKey}`)
      const data = await response.json()
      console.log(data.hits)
    setRecipes(data.hits)
    } catch (error) {
    console.log(error.message)
    }
  
  }
  getRandomRecipes();
}, [onSearchClick]);

const searchHandlerOnForm = (e) => {
  setSearch(e.target.value)
}
const queryOnForm = (e) => {
  e.preventDefault()
  setOnSearchClick(search)
  setSearch("") //Resets the search input to empty again after click on search 
}

if (recipes ) {
  return (
    <div className="App">
      <form onSubmit={queryOnForm} className="search-form">
      <input type="text"  className="search-bar" value={search} onChange={searchHandlerOnForm}/>
      <button type='submit' className="search-button">Search</button>
      </form>
<div className="recipes">
{recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories.toString().slice( 0, -15)} ingredients={recipe.recipe.ingredients}/>
      ))}
</div>
    </div>
  );
}
return <h1>No data, sorryyy</h1>
}



export default App;
