import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { weatherWithCoordAPI } from '../../store/services/WeatheServicei';
import { formatDay, formatTime } from '../../utils/DataFormats';
import DefaultCard from '../CityCard/DefaultCard';
import DefaultCardSkeleton from '../CityCard/Sceletons/DefaultCardSkeleton';

const DailyWeatherList = () => {
  const { currentCity } = useAppSelector(state => state.citiesReducer);
  const { data, isLoading } = weatherWithCoordAPI.useGetDailytWeatherQuery(
    {
      lat: currentCity.cords.lat,
      lon: currentCity.cords.lon,
    },
    {}
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography sx={{ marginBottom: '10px' }} variant='h4' component={'h2'}>
        {'Погода на весь тиждень'}
      </Typography>
      <Grid container spacing={2}>
        {!isLoading ? (
          data?.daily.map(
            (
              item: {
                sunrise: number;
                sunset: number;
                dt: number;
                temp: { min: number; max: number; day: number };
                wind_deg: number;
                clouds: number;
                wind_speed: number;
                pressure: number;
                weather: [{ description: string; icon: string }];
              },
              index: React.Key | null | undefined
            ) => (
              <Grid key={index} item>
                <DefaultCard
                  sunriseTime={formatTime(item.sunrise)}
                  sunsetTime={formatTime(item.sunset)}
                  day={formatDay(item.dt)}
                  minTemperature={item.temp?.min}
                  maxTemperature={item.temp?.max}
                  dayTemperature={item.temp?.day}
                  windAngle={item.wind_deg}
                  clouds={item.clouds}
                  windSpeed={item.wind_speed}
                  presure={item.pressure}
                  precipitation={item.weather[0]?.description}
                  icon={item.weather[0]?.icon}
                />
              </Grid>
            )
          )
        ) : (
          <>
            {[...Array(8)].map((item, index) => (
              <Grid key={index} item>
                <DefaultCardSkeleton />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default DailyWeatherList;
