function Filter({ filtredMeals }) {
  return (
    <div className="container wrapper-btn">
      <button onClick={() => filtredMeals('desserts')}>Dessert</button>
      <button onClick={() => filtredMeals('drinks')}>Drinks</button>
      <button onClick={() => filtredMeals('main course')}>Main course</button>
      <button onClick={() => filtredMeals('salad')}>Salad</button>
      <button onClick={() => filtredMeals('soup')}>Soup</button>
      <button onClick={() => filtredMeals('starter')}>Starter</button>
    </div>
  );
}

export default Filter;
