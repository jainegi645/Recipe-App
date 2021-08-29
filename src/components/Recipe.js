import React, { useContext } from "react";
import "./stylesheets/recipelist.css";
import {MyContext }from "../App";
import { Link } from "react-router-dom";


function Recipe() {
  const { mealData} = useContext(MyContext);

  return (
    <>
    {
      mealData && mealData.map((meal,index)=>{
        return(
        <div className='recipe-box' key = {meal.recipe.label}> 
        <h2>{meal.recipe.label}</h2>
         <img src = {meal.recipe.image} alt='recipe-img'/>
         <Link to = {`/${index}`}> view more</Link>
        </div>
        ) 
      })
    }     
    </>
  )
}

export default Recipe;



