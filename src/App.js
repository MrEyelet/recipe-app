import React, { useEffect, useState } from "react"
import Recipe from "./Recipe"
import "./App.css"

const App = () => {
  //api keys
  const APP_ID = "463c22d8"
  const APP_KEY = "085aad273d11b7ddab47599cd4f1166d"
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  //get recipies data
  const getRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
      console.log(data)
      console.log(recipes)
    } catch (e) {
      console.log(e, "error!!!!")
    }
  }

  //display recipies data when 'component did mount'
  useEffect(() => {
    getRecipes()
  }, [])

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* map thru fetched array */}
      <div>
        {recipes.map((el, index) => (
          <Recipe key={`recipe-${index}`} label={el.recipe.label} calories={el.recipe.calories} image={el.recipe.image} />
        ))}
      </div>
    </div>
  )
}

export default App
