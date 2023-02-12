import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';

const movieText = 'Harry';
const seriesText = 'Friends';

const APIKey = '78fdab31';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );

    console.log(response);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );

    console.log(response);
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

    console.log(response);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  // isLoading: true,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  // extraReducers: {
  //   [fetchAsyncMovies.pending]: () => {
  //     console.log('Pending');
  //   },
  //   [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
  //     console.log('Fetched Successfully!');
  //     return { ...state, movies: payload };
  //   },
  //   [fetchAsyncMovies.rejected]: () => {
  //     console.log('Rejected!');
  //   },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log('pending');
        // state.isLoading = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        // console.log('Fetched Successfully!');
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        console.log('rejected');
        // state.isLoading = false;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        // console.log('Fetched Successfully!');
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        // console.log('Fetched Successfully!');
        return { ...state, selectedMovieOrShow: payload };
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
