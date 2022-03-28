import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import RecipeCardComp from "../home/RecipeCardComp";
import { HomeImg, ImgDiv, MainContainer, RecipeCard } from "./HomeStyle";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const APP_ID = "4a501568";
const APP_KEY = "ebc66505effad9565952c4eb88772c6e";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      console.log(result);
      if (result.data.more) {
        console.log("No food a this name");
      }
      setRecipes(result.data.hits);
      setQuery("");
    } else {
      console.log("Please Fill the Form");
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
