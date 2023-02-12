import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../components/MovieListing/MovieListing';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  const movieText = 'Harry';
  const seriesText = 'Friends';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
