import React from "react";

export const Footer = () => {
  return (
    <div className="w-full  bg-gray-300">
      <div className="w-[90%] mt-2 py-1 mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="w-full md:w-[50%] text-center">
          <p>&copy;{new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="w-full md:w-[50%] text-center">
          <p>Created by Aaron</p>
        </div>
      </div>
    </div>
  );
};
