import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.jpeg";
import { useDispatch } from "react-redux";
import "./Header.scss";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

export const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch=useDispatch();
//   if(term==="") return alert("please enter search term")
  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm('')

    console.log(term);
  };
  return (
    <div className="header">
        <div className="logo">
        <Link to="/">movie app</Link>
      </div>
      <div className='search-bar'>
            <form onSubmit={submitHandler}>
                <input type="text" value={term} placeholder="Search Movies or Shows here" onChange={(e)=>setTerm(e.target.value)} />
                <button type="submit"><i className='fa fa-search'></i></button>
            </form>
        </div>
      
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};
