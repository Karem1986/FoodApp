import React from "react";

export default function Recipe({title, image, summary, diets}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt=""/>
      <p>{summary}</p>
      <h4>{diets} </h4>
      <h4>Ingredients: </h4>
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
