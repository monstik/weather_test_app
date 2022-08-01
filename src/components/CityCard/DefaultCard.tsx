import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';

import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import CallMadeIcon from '@mui/icons-material/CallMade';

interface IDefaultCatd {
  sunriseTime: string;
  sunsetTime: string;
  minTemperature: number;
  maxTemperature: number;
  day: string;
  dayTemperature: number;
  presure: number;
  windSpeed: number;
  windAngle: number;
  precipitation: string;
  icon: string;
  clouds: number;
}

const DefaultCard: FC<IDefaultCatd> = ({
  sunriseTime,
  sunsetTime,
  day,
  minTemperature,
  maxTemperature,
  dayTemperature,
  presure,
  windSpeed,
  windAngle,
  precipitation,
  icon,
  clouds,
}) => {
  return (
    <Card
      sx={{
        width: '260px',
        height: '300px!important',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        WebkitBackdropFilter: 'blur(4px)',
        backdropFilter: 'blur(4px)',
        bgcolor: 'rgba(46, 45, 141, 0.65)',

        cursor: 'pointer',

        '&:hover': {
          transform: 'Scale(1.01)',
          transition: 'all 0.5s',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '10px',
            minHeight: '36px',
          }}
        >
          <Typography sx={{ fontWeight: '700' }} variant='h6' component={'h1'}>
            {day}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '15px',
            }}
          >
            <Avatar
              alt='weather'
              sx={{ width: 56, height: 56 }}
              src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
            />{' '}
            <Typography sx={{ textAlign: 'center' }}>
              {precipitation}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              rowGap: '5px',
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '6px' }}
            >
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <ThermostatAutoIcon />
                <Typography>{Math.round(dayTemperature)}°C</Typography>
              </Box>
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <DeviceThermostatIcon />
                <Typography>
                  {Math.round(minTemperature)} - {Math.round(maxTemperature)}°C
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <CompressIcon />
                <Typography>{presure}p</Typography>
              </Box>
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <FilterDramaIcon />
                <Typography sx={{ whiteSpace: 'nowrap' }}>{clouds}%</Typography>
              </Box>
            </Box>

            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '6px' }}
            >
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <AirIcon />
                <Typography sx={{ whiteSpace: 'nowrap' }}>
                  {windSpeed}м/с
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <CallMadeIcon />
                <Typography sx={{ whiteSpace: 'nowrap' }}>
                  {windAngle}°
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <WbTwilightIcon />
                <Typography sx={{ whiteSpace: 'nowrap' }}>
                  {sunriseTime}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', columnGap: '5px' }}>
                <NightsStayIcon />
                <Typography sx={{ whiteSpace: 'nowrap' }}>
                  {sunsetTime}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DefaultCard;
