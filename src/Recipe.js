import React, { useState } from "react"

const Recipe = props => {
  const [click, setClick] = useState()
  return (
    <div className="box">
      <h1>{props.label}</h1>
      <p>{props.calories.toFixed(2)}</p>
      <img src={props.image} alt={props.label} />
      <ol>
        {props.ingredients.map((el, index) => (
          <li key={`ingredient-${index}`}>{el.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe
