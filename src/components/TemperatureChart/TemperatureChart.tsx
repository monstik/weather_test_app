import { Box, Skeleton, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryLabel } from 'victory';
import { useAppSelector } from '../../hooks/redux';
import { weatherWithCoordAPI } from '../../store/services/WeatheServicei';

const TemperatureChart = () => {
  const { currentCity } = useAppSelector(state => state.citiesReducer);

  const { data, isLoading } = weatherWithCoordAPI.useGetHourlyWeatherQuery(
    {
      lat: currentCity.cords.lat,
      lon: currentCity.cords.lon,
    },
    {}
  );

  const [temperatureCoords, setTemperatureCoords] = useState([
    {
      x: 0,
      y: 0,
      y0: 0,
    },
  ]);

  useEffect(() => {
    if (data) {
      let tempTemperatures: any = [];
      let xCord = 0;
      data.hourly.map((item: { temp: number }, index: number) => {
        if (index % 4 === 0) {
          return tempTemperatures.push({
            x: ++xCord,
            y: Math.round(item.temp),
            y0: Math.round(item.temp) - 14,
          });
        } else {
          return null;
        }
      });

      setTemperatureCoords(tempTemperatures);
    }
  }, [data]);

  return (
    <Box>
      <Box sx={{ p: 4 }}>
        <Typography variant='h4' component={'h2'}>
          {'Графік температури на день'}
        </Typography>
      </Box>
      {!isLoading ? (
        <Box sx={{ height: '200px' }}>
          <VictoryBar
            domainPadding={100}
            labels={({ datum }) => `${datum.y}+`}
            domain={{ x: [0, 14], y: [-10, 40] }}
            labelComponent={<VictoryLabel dy={40} />}
            width={2000}
            barWidth={137}
            data={temperatureCoords}
            style={{
              data: { fill: ({ datum }) => `rgb(239, 2${datum.y}, 87)` },
              labels: {
                fontSize: ({ text }) => 30,
              },
            }}
          />
        </Box>
      ) : (
        <Skeleton
          variant='rectangular'
          sx={{
            width: '100%',
            height: '200px',
          }}
        />
      )}
    </Box>
  );
};

export default TemperatureChart;
