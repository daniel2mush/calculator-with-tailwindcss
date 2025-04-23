import { Search } from "lucide-react";
import React, { useState } from "react";

const Animation = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <section
      className={`${
        isDark ? "bg-gray-800" : "bg-slate-200"
      } min-h-screen flex justify-center items-center transition-all duration-700 flex-col`}>
      <h1
        className={`${
          isDark ? "text-white font-bold" : "text-gray-800 font-bold"
        }`}>
        Transition Tutorial
      </h1>
      <div className=" w-full max-w-sm h-60 shadow-lg flex justify-center items-center">
        {isDark ? (
          <div className=" w-full mx-4">
            <input
              type="text"
              placeholder="Enter your search"
              className=" py-2  px-2 w-full rounded active:border-none focus:border-none focus:outline-none active:outline-none "
            />
          </div>
        ) : (
          <Search
            onClick={() => setIsDark(!isDark)}
            className=" hover:size-12 transition-all duration-150 animate-bounce ease-in-out  "
          />
        )}
      </div>
    </section>
  );
};

export default Animation;
