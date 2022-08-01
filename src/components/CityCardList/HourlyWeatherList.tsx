import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { weatherWithCoordAPI } from '../../store/services/WeatheServicei';
import { formatTime } from '../../utils/DataFormats';
import MinimalisticCityCard from '../CityCard/MinimalisticCityCard';
import MinimalistikCardSkeleton from '../CityCard/Sceletons/MinimalistikCardSkeleton';

const HourlyWeatherList = () => {
  const { currentCity } = useAppSelector(state => state.citiesReducer);

  const { data, isLoading } = weatherWithCoordAPI.useGetHourlyWeatherQuery(
    {
      lat: currentCity.cords.lat,
      lon: currentCity.cords.lon,
    },
    {}
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography sx={{ marginBottom: '10px' }} variant='h4' component={'h2'}>
        {'Погода Сьогодні(інтервах 4 години)'}
      </Typography>
      <Grid container spacing={2}>
        {!isLoading ? (
          data?.hourly.map(
            (
              item: {
                dt: number;
                temp: number;
                wind_speed: number;
                clouds: number;
                pressure: number;
                weather: [{ description: string; icon: string }];
              },
              index: React.Key | null | undefined
            ) => {
              if (Number(index) % 4 === 0) {
                return (
                  <Grid key={index} item>
                    <MinimalisticCityCard
                      time={formatTime(item.dt)}
                      temperature={item.temp}
                      windSpeed={item.wind_speed}
                      clouds={item.clouds}
                      presure={item.pressure}
                      precipitation={item.weather[0]?.description}
                      icon={item.weather[0]?.icon}
                    />
                  </Grid>
                );
              } else {
                return null;
              }
            }
          )
        ) : (
          <>
            {[...Array(12)].map((item, index) => (
              <Grid key={index} item>
                <MinimalistikCardSkeleton />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HourlyWeatherList;
