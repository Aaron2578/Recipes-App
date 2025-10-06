import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import RecipesContent from "./RecipesContent";
import { RecipesContext } from "../context/RecipesProvider";

const Header = () => {
  const [res, setRes] = useState([]);
  const { search, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      setRes(res.data.recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="w-full  bg-gray-300">
        <div className="w-[90%] py-5 mx-auto flex justify-between items-center gap-5">
          <div className="w-[33.3%] md:w-[15%] flex-row md:flex items-center">
            <span>🍟</span>
            <h1 className="md:text-xl font-bold">Recipes </h1>
          </div>
          <div className="w-[33.3%] md:w-[60%] flex gap-5">
            <input
              type="search"
              className="border-2 rounded-full w-[100%] md:w-[70%]  pl-2"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-[33.3%] md:w-[15%] text-sm md:text-sm md:font-medium">
            Receipes : {res.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
