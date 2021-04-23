import React from "react"

const Recipe = props => {
  return (
    <div className="box">
      <h1>{props.label}</h1>
      <p>{props.calories.toFixed(2)}</p>
      <img src={props.image} alt={props.label} />
      <ol>
        {props.name.map((ingredient, index) => (
          <li key={`ingredient-${index}`}>
            {ingredient} {console.log(ingredient)}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe
