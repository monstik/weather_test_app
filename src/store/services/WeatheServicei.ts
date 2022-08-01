import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherWithCityAPI = createApi({
  reducerPath: 'weatherWithCityAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  endpoints: builder => ({
    getWeather: builder.query({
      query: city => ({
        url: `/weather?q=${city}&units=metric&APPID=b71a3bf98a509019b0984b55ad712905`,
        method: 'GET',
      }),
    }),

    getWeatherMutation: builder.mutation({
      query: city => ({
        url: `/weather?q=${city}&units=metric&APPID=b71a3bf98a509019b0984b55ad712905`,
        method: 'GET',
      }),
    }),
  }),
});


export const weatherWithCoordAPI = createApi({
  reducerPath: 'weatherWithCoordsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/3.0',
  }),
  endpoints: builder => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current&appid=b71a3bf98a509019b0984b55ad712905`,
        method: 'GET',
      }),
    }),
    getHourlyWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,daily&appid=b71a3bf98a509019b0984b55ad712905`,
        method: 'GET',
      }),
    }),
    getDailytWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,hourly&appid=b71a3bf98a509019b0984b55ad712905`,
        method: 'GET',
      }),
    }),
  }),
});
