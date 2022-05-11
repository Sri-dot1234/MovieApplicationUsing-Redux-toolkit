import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.scss'
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

export const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return ()=>{
        dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
        {Object.keys(data).length===0 ? (<p>.....loading</p>):
       <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
            <span> Rating<i className="fa fa-star"></i>{data.imdbRating}</span>
            <span>year<i className="fa fa-calendar"></i>{data.Year}</span>
            <span>Votes<i className="fa fa-thumbs-up"></i>{data.imdbVotes}</span>
            <span>Runtime<i className="fa fa-film"></i>{data.Runtime}</span>
        </div>
        <div className="movie-plat">
            {data.Plot}
        </div>
        <div className="movie-info">
            <div>
                <span>Stars:</span>
            {data.Actors}
            </div>
            <div>
                <span>Director:</span>
            {data.Director}
            </div>
            <div>
                <span>Genre:</span>
            {data.Genre}
            </div>
            <div>
                <span>Language:</span>
            {data.Language}
            </div>
            <div>
                <span>Awards:</span>
            {data.Awards}
            </div>
        </div>
      </div>
      <div className="section-right">
      <img src={data.Poster} alt={data.Title} />
      </div>
      
</> }
    </div>
  );
};
