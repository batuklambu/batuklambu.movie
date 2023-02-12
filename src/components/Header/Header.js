import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';
import pic from '../../images/user.png';
import './Header.css';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(term);
    if (term === '') return alert('Please Enter Search');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(evt) => setTerm(evt.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={pic} alt="user" className="logo"></img>
      </div>
    </div>
  );
};

export default Header;
