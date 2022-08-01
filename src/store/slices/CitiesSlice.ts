import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity, ICityAdd } from '../../models/ICity';
import { v4 as uuidv4 } from 'uuid';
import { ICurrentCity } from '../../models/IcurrentCity';
interface CitiesState {
  cities: ICity[];
  isOpenModal: boolean;
  currentCity: ICity;
}

const initialState: CitiesState = {
  cities: JSON.parse(localStorage.getItem('cities') || '[]'),
  isOpenModal: false,
  currentCity: {
    id:'',
    name: '',
    cords: {
        lat: 0,
        lon: 0,
    }
  },
};

export const citiesSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<ICityAdd>) {
      state.cities.push({
        id: uuidv4(),
        name: action.payload.name,
        cords: action.payload.cords
      });
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
    removeCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter(item => item.id !== action.payload);
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
    openModal(state, actions: PayloadAction<string>) {
      state.isOpenModal = true;
      let indx = state.cities.findIndex(item => item.id === actions.payload);
      console.log(indx);
      
      state.currentCity =  state.cities[indx]
        
      
      
    },
    closeModal(state, action: PayloadAction<void>) {
      state.isOpenModal = false;
      state.currentCity = {
        id: '',
        name: '',
        cords: {
          lat: 0,
          lon: 0,
        },
      };
    },
  },
});

export default citiesSlice.reducer;
