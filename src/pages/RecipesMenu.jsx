import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RecipesContext } from "../context/RecipesProvider";

const RecipesMenu = ({ handleMenuClick }) => {
  const [data, setData] = useState([]);
  const { search } = useContext(RecipesContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      setData(res.data.recipes);
    };
    fetchRecipes();
  }, []);

  // 🔎 filter data based on search text
  const filteredData =
    typeof search === "string" && search.trim() !== ""
      ? data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
      : data;

  return (
    <div className="w-[100%] md:w-[30%] bg-amber-100 md:h-[80vh] mt-5 overflow-y-scroll">
      <p className="md:fixed w-fit bg-gray-300 py-1 px-5 rounded-br-full font-bold">
        RecipesMenu
      </p>
      <div className="flex md:block">
        {filteredData.length > 0 ? (
          filteredData.map((d, i) => (
            <div
              key={i}
              className="m-5 md:m-10 flex-col md:flex md:flex-row items-center md:gap-3 cursor-pointer"
              onClick={() => handleMenuClick(d.id)}
            >
              <img
                src={d.image}
                alt={d.name}
                className="w-[90%] pt-5 md:pt-0 md:w-[30%] rounded-full"
              />
              <p className="text-xs md:text-base">{d.name}</p>
            </div>
          ))
        ) : (
          <p className="m-10 text-red-500 font-semibold">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default RecipesMenu;
