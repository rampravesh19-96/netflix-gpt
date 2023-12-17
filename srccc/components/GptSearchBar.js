import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langNow = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
    const json = await data.json()
    return json.results
  }
  const handleGptSearchClick = async () => {
    
    // const gptQuery =
    //   "Act as Movie Recommendation System suggest some movie for the query " +
    //   searchText.current.value +
    //   ". Only give me names of five movies, comma seperated like example result given ahead. Example result: Gadar, Sholay, don, Golmal, koi mil gaya";
    // const gptResult = (openai.Chat.ChatCompletion =
    //   await openai.chat.completions.create({
    //     messages: [{ role: "user", content: gptQuery }],
    //     model: "gpt-3.5-turbo",
    //   }));
    // if (!gptResult.choices) {
    // }
    // const gptMovies = gptResult.choices[0]?.message.content.split(",");
    const gptMovies = ["Andaz apna apna","Sholay","ishq","don","amar akbar anthony"]
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}))
  };
  return (
    <div className="pt-[13%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langNow].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langNow].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
