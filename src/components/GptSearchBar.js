import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langNow = useSelector(store => store.config.lang)
  return (
    <div className="pt-[13%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langNow].gptSearchPlaceholder}
        />
        <button className="py-2 m-4 px-4 bg-red-700 col-span-3 text-white rounded-lg">
        {lang[langNow].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
