import React, { useEffect } from 'react';
import MovieListing from '../components/MovieListing/MovieListing';
import movieApi from '../common/apis/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/movies/movieSlice';
// import { APIKey } from '../common/apis/MovieApi.key';

const Home = () => {
  const movieText = 'Harry';
  const APIKey = '78fdab31';
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
