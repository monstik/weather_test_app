import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';

import FilterDramaIcon from '@mui/icons-material/FilterDrama';
interface CityCardI {
  time: string;
  temperature: number;
  presure: number;
  windSpeed: number;
  precipitation: string;
  icon: string;
  clouds: number;
}



const MinimalisticCityCard: FC<CityCardI> = ({
  time,
  temperature,
  presure,
  windSpeed,
  precipitation,
  icon,
  clouds
}) => {
  return (
    <Card
      sx={{
        width: '200px',
        height: '200px!important',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        WebkitBackdropFilter: 'blur(4px)',
        backdropFilter: 'blur(4px)',
        bgcolor: 'rgba(255, 0, 221, 0.4)!important',

        cursor: 'pointer',

        '&:hover': {
          transform: 'Scale(1.01)',
          transition: 'all 0.5s',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <Typography sx={{ fontWeight: '700' }} variant='h5' component={'h1'}>
            {time}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '5px',
            }}
          >
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
              <DeviceThermostatIcon />
              <Typography>{Math.round(temperature)}°C</Typography>
            </Box>
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
              <CompressIcon />
              <Typography>{presure}p</Typography>
            </Box>
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
              <AirIcon />
              <Typography sx={{ whiteSpace: 'nowrap' }}>
                {windSpeed}м/с
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
              <FilterDramaIcon />
              <Typography sx={{ whiteSpace: 'nowrap' }}>{clouds}%</Typography>
            </Box>
          </Box>{' '}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
            alt='weather'
              sx={{ width: 56, height: 56 }}
              src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
            />

            <Typography variant='caption' component={'p'} sx={{ textAlign: 'center' }}>
              {precipitation}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MinimalisticCityCard;
