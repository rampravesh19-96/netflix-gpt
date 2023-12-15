import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null
    },
    reducers : {
        nowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        }
    }
})

export const {nowPlayingMovies} = movieSlice.actions
export default movieSlice.reducer