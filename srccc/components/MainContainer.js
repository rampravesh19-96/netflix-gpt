import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackround from './VideoBackround';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies )
    if(!movies) return;
    const mainMovies = movies[0]
    const {original_title,overview,id} = mainMovies
    return (
    <div> 
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackround movieId={id}/>
    </div>
  )
}

export default MainContainer
