import { Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import CityCard from '../CityCard/CityCard'

const CityCardList = () => {

    const {cities} = useAppSelector(state => state.citiesReducer)

  return (
    <Grid

    
      justifyContent='center'
      sx={{
      
        
        }}
    //   flexWrap={'wrap'}
      container
      spacing={3}
    >
      {cities &&
        cities.map((item, index) => (
          <Grid  item key={item.id}>
            <CityCard id={item.id} city={item.name} />
          </Grid>
        ))}
    </Grid>
  );
}

export default CityCardList