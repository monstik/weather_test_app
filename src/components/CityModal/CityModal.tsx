import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { citiesSlice } from '../../store/slices/CitiesSlice';
import { IconButton, Typography, Zoom } from '@mui/material';

import { Box } from '@mui/system';

import CloseIcon from '@mui/icons-material/Close';
import HourlyWeatherList from '../CityCardList/HourlyWeatherList';
import DailyWeatherList from '../CityCardList/DailyWeatherList';
import TemperatureChart from '../TemperatureChart/TemperatureChart';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

export default function CityModal() {
  const { currentCity, isOpenModal } = useAppSelector(
    state => state.citiesReducer
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(citiesSlice.actions.closeModal());
  };

  return (
    <Dialog
      open={isOpenModal}
      TransitionComponent={Transition}
      keepMounted={false}
      maxWidth={'xl'}
      fullWidth
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
      sx={{
        '& .MuiPaper-root': {
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)',
          bgcolor: 'rgba(46, 45, 141, 0.60)',
          height: '95vh',
        },

        '& .MuiDialog-container': {},
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h3' component={'h1'}>
            {'Погода в місті ' + currentCity.name}
          </Typography>
          <Box>
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize='large' />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(46, 45, 141, 0.65)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(218, 16, 215, 0.65)',
            borderRadius: '10px',
            border: 'none',
          },
        }}
      >
        <TemperatureChart />

        <HourlyWeatherList />
        <DailyWeatherList />
      </DialogContent>
    </Dialog>
  );
}
