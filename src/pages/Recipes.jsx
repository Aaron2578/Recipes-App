import React from "react";

const Recipes = ({ response }) => {
  if (!response) {
    return <p>No Data</p>;
  }

  return (
    <div className="md:w-[70%] bg-amber-100 h-full md:h-[80vh] mt-5">
      <h2 className="md:fixed w-fit bg-gray-300 py-1 px-5 rounded-br-full font-bold">
        Recipes
      </h2>
      {response && (
        <div className="m-5 md:m-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <img
                src={response.image}
                alt={response.name}
                className="h-[200px] md:h-[200px] rounded-full"
              />
            </div>
            <div>
              <p className="font-black md:text-xl">{response.name}</p>
              <div className="w-full md:flex gap-20 justify-between">
                <div>
                  <p className="py-4 text-base">
                    <b>✨ Rating :</b> {response.rating}
                  </p>
                  <p className="py-4 text-base">
                    <b> 🚀 Level :</b> {response.difficulty}
                  </p>
                  <p className="py-4 text-base">
                    <b>🍕 Meal Type :</b> {response.mealType}
                  </p>
                </div>
                <div>
                  <p className="py-4">
                    <b>🕐 Cooking Time :</b> {response.cookTimeMinutes} Minutes
                  </p>
                  <p className="py-4">
                    <b>💪 Calories : </b>
                    {response.caloriesPerServing}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="my-4">
              <span className="font-medium">
                <b>🍱 Ingredients :</b>{" "}
              </span>
              {response.ingredients}
            </p>
            <p>
              <span className="font-medium">
                <b>👨‍🍳 Instructions :</b>{" "}
              </span>
              {response.instructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
