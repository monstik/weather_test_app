import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { weatherWithCityAPI } from '../../store/services/WeatheServicei';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import ClearIcon from '@mui/icons-material/Clear';
import SyncIcon from '@mui/icons-material/Sync';
import { useAppDispatch } from '../../hooks/redux';
import { citiesSlice } from '../../store/slices/CitiesSlice';

interface CityCardI {
  id: string;
  city: string;
}

const CityCard: FC<CityCardI> = ({ id, city }) => {
  const { data, refetch } = weatherWithCityAPI.useGetWeatherQuery(city);
  const [btnVisible, setBtnVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onRemoveHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    dispatch(citiesSlice.actions.removeCity(id));
  };

  const onRefetchHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    refetch();
  };

  const onCardHandler = () => {
    dispatch(citiesSlice.actions.openModal(id));
  };

  return (
    <Card
      onClick={onCardHandler}
      onMouseEnter={() => setBtnVisible(true)}
      onMouseLeave={() => setBtnVisible(false)}
      sx={{
        width: '260px',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        WebkitBackdropFilter: 'blur(4px)',
        backdropFilter: 'blur(4px)',
        bgcolor: 'rgba(46, 45, 141, 0.65)',

        cursor: 'pointer',

        '&:hover': {
          transform: 'Scale(1.03)',
          transition: 'all 0.5s',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            marginBottom: '10px',
            minHeight: '36px',
          }}
        >
          {data ? (
            <Box sx={{ maxWidth: '80%' }}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                variant='h6'
                component={'h1'}
              >
                {`${city}, ${data?.sys?.country}`}
              </Typography>
            </Box>
          ) : (
            <Skeleton width={135} animation='wave' />
          )}

          {btnVisible && (
            <Box
              sx={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                display: 'flex',
                columnGap: '7px',
              }}
            >
              <IconButton
                onClick={onRefetchHandler}
                size='small'
                sx={{
                  backgroundColor: 'rgba(0, 240, 32, 0.5)',

                  '&:hover': {
                    backgroundColor: 'rgba(0, 240, 32, 0.8)',
                  },
                }}
              >
                <SyncIcon />
              </IconButton>
              <IconButton
                onClick={onRemoveHandler}
                size='small'
                sx={{
                  backgroundColor: 'rgba(255, 7, 7, 0.5)',

                  '&:hover': {
                    backgroundColor: 'rgba(255, 7, 7, 0.8)',
                  },
                }}
              >
                <ClearIcon />
              </IconButton>
            </Box>
          )}
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
            {data?.main ? (
              <React.Fragment>
                <Box sx={{ display: 'flex', columnGap: '5px' }}>
                  <DeviceThermostatIcon />
                  <Typography>{Math.round(data?.main?.temp)}°C</Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: '5px' }}>
                  <CompressIcon />
                  <Typography>{data?.main?.pressure}p</Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: '5px' }}>
                  <AirIcon />
                  <Typography sx={{ whiteSpace: 'nowrap' }}>
                    {data?.wind?.speed}м/с
                  </Typography>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Skeleton width={75} animation='wave' />
                <Skeleton width={75} animation='wave' />
                <Skeleton width={75} animation='wave' />
              </React.Fragment>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {data?.weather[0]?.icon ? (
              <React.Fragment>
                <Avatar
                  alt='weather'
                  sx={{ width: 56, height: 56 }}
                  src={` http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                />{' '}
                <Typography sx={{ textAlign: 'center' }}>
                  {data?.weather[0]?.description}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CircularProgress />
                <Skeleton width={100} animation='wave' />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CityCard;
