import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "b17996fe";
  const APP_KEY = "75def8217b10602e31d320e3857782aa";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // initial state 'query' will have a value of 'chicken'
  const [query, setQuery] = useState("tilapia");

  // useEffect will make the request only once since we added '[]'
  // then will make the request only when the 'query' is sent by pressing the 'Search' button
  // actually when query is updated
  useEffect(() => {
    getRecipes();
  }, [query]);

  //
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    // now with data returned from the API we are saying 'recipes = data.hits'
    // at the moment, 'recipes' is an empty array, STATE without any data
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    // to stop page refresh
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((rec, i) => (
          <Recipe
            key={i}
            title={rec.recipe.label}
            calories={rec.recipe.calories}
            image={rec.recipe.image}
            ingredients={rec.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
