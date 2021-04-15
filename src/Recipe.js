const Recipe = (props) => {
  return (
  <div className="recipeCard">
      <h2 className="recipeLabel">{props.title}</h2>
      <div className="imageContainer">
        <img className="recipeImage" src={props.imgSrc} alt={props.imgAlt}/>
      </div>
      <a href={props.recipeUrl}>Full Recipe</a>
  </div> 

  )
}

export default Recipe;