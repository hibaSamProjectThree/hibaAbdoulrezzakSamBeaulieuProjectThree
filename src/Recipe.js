const Recipe = (props) => {
  return (
  <div className="outerWrapper">

      <h2 className="recipeLabel">{props.title}</h2>
      <img className="recipeImage" src={props.imgSrc} alt={props.imgAlt}/>
      <ul>
        {props.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <a href={props.recipeUrl}>Click Here for Full Recipe</a>
  </div> 

  )
}

export default Recipe;