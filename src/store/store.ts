import { configureStore } from '@reduxjs/toolkit';
import {
  weatherWithCityAPI,
  weatherWithCoordAPI,
} from './services/WeatheServicei';
import citiesReducer from './slices/CitiesSlice';
// import { apiSlice } from './api/apiSlice';
// import authReducer from '../features/auth/authSlice';
// import errorsReducer from '../features/errorsReducer';

export const store = configureStore({
  reducer: {
    [weatherWithCityAPI.reducerPath]: weatherWithCityAPI.reducer,
    [weatherWithCoordAPI.reducerPath]: weatherWithCoordAPI.reducer,
    citiesReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      weatherWithCityAPI.middleware,
      weatherWithCoordAPI.middleware
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
