// import React from "react";
// import { Button } from "../../components/Header/HeaderStyle";
// import { RecipeCard, RecipeHeader, RecipeImage } from "./HomeStyle";
// import defaultImage from "../../assets/default-image.jpg";

// const RecipeCardComp = (recipe) => {
//   return (
//     <RecipeCard>
//       <RecipeHeader>{recipe.label}</RecipeHeader>
//       <RecipeImage src={recipe?.image || defaultImage}></RecipeImage>
//       {/* <Button onClick={moreClick}>View More</Button> */}
//     </RecipeCard>
//   );
// };

// export default RecipeCardComp;

import React from "react";
import { RecipeImage, RecipeCard, RecipeHeader, Button } from "./HomeStyle";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
const RecipeCardComp = ({ recipe }) => {
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <RecipeCard>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};
export default RecipeCardComp;
