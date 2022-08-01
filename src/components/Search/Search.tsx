import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { citiesSlice } from '../../store/slices/CitiesSlice';
import { weatherWithCityAPI } from '../../store/services/WeatheServicei';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<any>('');

  const [getWeather, { error }] =
    weatherWithCityAPI.useGetWeatherMutationMutation();

  const addHandler = async () => {
    try {
      if (value) {
        let city = value.label.split(',')[0];
        const succes = await getWeather(city).unwrap();

        dispatch(
          citiesSlice.actions.addCity({
            name: city,
            cords: {
              lat: succes.coord.lat,
              lon: succes.coord.lon,
            },
          })
        );

        setValue(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid>
      <Grid
        spacing={2}
        container
        display={'flex'}
        justifyContent={'center'}
        sx={{}}
      >
        <Grid xs={8} item>
          <GooglePlacesAutocomplete
            apiKey='AIzaSyA14OZSNfV_wHXXENnqaEBWrR4l86alL9g'
            selectProps={{
              value,
              onChange: setValue,
              styles: {
                input: (provided: any) => ({
                  ...provided,
                  color: 'blue',
                }),
                option: (provided: any) => ({
                  ...provided,
                  color: 'blue',
                }),
                singleValue: (provided: any) => ({
                  ...provided,
                  color: 'blue',
                }),
              },
            }}
          />
        </Grid>
        <Grid xs={4} item>
          <Button variant='contained'>
            <Typography
              onClick={addHandler}
              variant='subtitle1'
              component={'p'}
            >
              Додати
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid sx={{ height: '24px' }}>
        {error && (
          <Typography
            sx={{ color: 'yellow' }}
            variant='body1'
            component={'span'}
          >
            Даного міста немає в нашій системі
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Search;
