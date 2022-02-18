function MyRecipesComponent({
  label,
  image,
  calories,
  ingredients,
  cuisineType,
}) {
  return (
    <div className="card">
      <div className="container">
        <h2 className="card-title">{label}</h2>
      </div>
      <div className="container">
        <h4 className="cuisine">"{cuisineType}"</h4>
      </div>
      <div className="container">
        <img src={image} className="image" />
      </div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <img
              src="https://cdn.icon-icons.com/icons2/2575/PNG/128/tick_check_mark_icon_153886.png"
              className="icon"
            />
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>
    </div>
  );
}

export default MyRecipesComponent;