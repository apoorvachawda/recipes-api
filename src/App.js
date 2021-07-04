import './App.css';
import api_key from './key';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './components/RecipeTile';
import './components/RecipeTile.css';

function App() {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${api_key.APP_ID}&app_key=${api_key.KEY}&health=${healthLabels}`;

  const getRecipes = async (e) => {
    e.preventDefault();
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log();
  }

  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍎</h1>
      <form action="" className = "searchForm" onSubmit = {(e) => {getRecipes(e)}  }>
        <input type="text" placeholder = "Enter ingredient" value = {query} onChange = {(e) => {setQuery(e.target.value)}} className = "searchbar" />
        <input type="submit" value="Search" className="submit-button" />
      </form>
      <div className = "recipeGallery">
        {
          recipes.map(recipe => {
            return <RecipeTile recipe = {recipe} />
          })
        }
      </div>
    </div>
  );
}

export default App;
