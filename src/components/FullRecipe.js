import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../App";

function FullRecipe() {
  const { index } = useParams();
  const { mealData } = useContext(MyContext);

  return (
    <div className="RecipeName">
      here it is:
      {console.log(
        mealData &&
          mealData
            .filter((el) => console.log( el.recipe.label )) 
      )
    }


      {console.log('path',index)}
      
    </div>
  );
}

export default FullRecipe;


// .map((i) => {
//     return <h1> {i}</h1>;
// })


