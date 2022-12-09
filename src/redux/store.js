import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducer as favoriteReducer} from '../redux/reducers/favoriteReducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export {store};
