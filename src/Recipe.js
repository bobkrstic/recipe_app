import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, b) => (
          <li key={b}>{ingredient.text}</li>
        ))}
      </ul>
      <p style={{ fontWeight: "bold" }}>Calories: {Math.round(calories)}</p>
      <img className={style.image} src={image} alt="recipe_image" />
    </div>
  );
};

export default Recipe;
