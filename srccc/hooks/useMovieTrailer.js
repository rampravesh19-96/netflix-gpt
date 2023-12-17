import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      !trailerVideo && getMovieVideo();
    }, []);
}

export default useMovieTrailer