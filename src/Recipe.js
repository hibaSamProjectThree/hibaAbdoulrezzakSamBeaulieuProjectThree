const Recipe = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imgSrc} alt={props.imgAlt}/>
      <a href={props.recipeUrl}>Go to Recipe</a>
    </div>
  )
}

export default Recipe;