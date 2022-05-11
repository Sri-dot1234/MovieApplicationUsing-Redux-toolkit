import React, { useEffect } from "react";
import { MovieList } from "../MovieList/MovieList";

import { useDispatch } from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
function Home() {
const dispatch = useDispatch();
const movieText="Harry";
const ShowText="Friends";

  useEffect(() => {
 dispatch(fetchAsyncMovies(movieText))
 dispatch(fetchAsyncShows(ShowText))
  }, [dispatch]);

  return (
    <div>
      {/* <div className='banner-img'>gfggg</div> */}
      <MovieList />
    </div>
  );
}

export default Home;
