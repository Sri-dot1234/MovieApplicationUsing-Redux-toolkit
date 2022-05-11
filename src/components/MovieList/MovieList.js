import React from "react";
import { useSelector } from "react-redux";
import { settings } from "../../common/Settings";
import { getAllMovies,getAllShows } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieList.scss";
export const MovieList = () => {
 
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
  renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
        shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container"><Slider {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  );
};
