import React from "react";

export default function Recipe({title, image, calories, ingredients}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt=""/>
      <h3>Ingredients: </h3>
<ul>{ingredients.map(ingredient => (
  <li> {ingredient.text}</li>
))}</ul>
   <h5> calories: {calories} </h5>
      {/* <h4>
        Instructions:{" "}
        <ol>
          <li>Step 1: </li>
          <li>Step 2: </li>
          <li>Step 3: </li>
          <li>Step 4: </li>
        </ol>
      </h4> */}
    </div>
  );
}
