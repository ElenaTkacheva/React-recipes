import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import Filter from './Filter';

function App() {

  const MY_ID = "87c76ba2";
  const MY_KEY = "91da22e7c92619d9f89c35d78db4f5e0";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myFilter, setMyFilter] = useState([]);



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
      setMyFilter(data.hits);
    }
    fetchData();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  const choosenDish = (dishType) => {
    const newList = myRecipes.filter(item => item.recipe.dishType[0] === dishType);
    setMyFilter(newList);
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="title">Find a Recipe</h1>
      </div>
      <div className="container wrapper-search">
        <div className="container">
          <form onSubmit={finalSearch}>
            <input
              className="search"
              placeholder="Search..."
              onChange={myRecipeSearch}
              value={mySearch}
            ></input>
          </form>
        </div>
        <div className="container">
          <button>
            <img
              onClick={finalSearch}
              src="https://img.icons8.com/fluency/48/000000/fry.png"
              className="icons"
              alt="icons"
            />
          </button>
        </div>
      </div>
      <div>
        <Filter filtredMeals={ choosenDish } />
      </div>
      <div className="recipes-wrapper">
        {myFilter.map((element, index) => (
          <MyRecipesComponent
            key={index}
            label={element.recipe.label}
            cuisineType={element.recipe.cuisineType}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
