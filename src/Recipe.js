const Recipe = (props) => {
  return (
  <div className="outerWrapper">

      <h2 className="recipeLabel">{props.title}</h2>
      <img className="recipeImage" src={props.imgSrc} alt={props.imgAlt}/>
      <a className="recipeLink" href ={props.recipeUrl}>Go to Recipe</a>
   </div> 

  )
}

export default Recipe;