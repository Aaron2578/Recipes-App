import axios from "axios";
import React, { Children, createContext, useState } from "react";
export const RecipesContext = createContext();

function RecipesProvider({ children }) {
  const [search, setSearch] = useState([]);

  const searchData = async () => {
    const res = await axios.get(
      `https://dummyjson.com/recipes/search?q=${search}`
    );
    setSearch(res.data.recipes);
  };
  function handleSearch() {
    searchData();
  }
  return (
    <RecipesContext.Provider value={{ search, setSearch, handleSearch }}>
      {children}
    </RecipesContext.Provider>
  );
}
export default RecipesProvider;
