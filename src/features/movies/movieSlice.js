import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';

const movieText = 'Harry';
const APIKey = '78fdab31';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    console.log(response);
    return response.data;
  }
);

const initialState = {
  movies: {},
  // isLoading: true,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
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
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
