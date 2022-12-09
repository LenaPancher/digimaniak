import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: {},
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    removeFavorite: (state, action) => {
      state.favorite = {};
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
