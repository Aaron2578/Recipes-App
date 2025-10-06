import React, { useState } from "react";
import RecipesMenu from "./RecipesMenu";
import Recipes from "./Recipes";
import axios from "axios";

const RecipesContent = () => {
  const [response, setResponses] = useState([]);
  function handleMenuClick(id) {
    const getRecipes = async () => {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setResponses(res.data);
    };
    getRecipes();
  }
  return (
    <div className="w-[90%] m-auto flex flex-col md:flex md:flex-row">
      <RecipesMenu handleMenuClick={handleMenuClick} />
      <Recipes response={response} />
    </div>
  );
};

export default RecipesContent;
