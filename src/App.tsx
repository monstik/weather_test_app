import MainLayout from './layouts/MainLayout';
import { Container, Grid } from '@mui/material';
import Search from './components/Search/Search';

import CityModal from './components/CityModal/CityModal';
import CityCardList from './components/CityCardList/CityCardList';

function App() {
  
  return (
    <MainLayout>
      <Grid>
        <Container
          maxWidth={'sm'}
          sx={{ marginTop: '50px' }}
        >
          <Grid xs={8} item>
            <Search />
          </Grid>
        </Container>
        <Container
          sx={{
            overflow: 'auto',
            height: 'calc(100vh - 140px)',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(46, 45, 141, 0.65)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(221, 255, 0, 0.8)',
              borderRadius: '15px',
              border: 'none',
            },
          }}
          maxWidth={'xl'}
        >
          <CityCardList />
        </Container>

        <CityModal />
      </Grid>
    </MainLayout>
  );
}

export default App;
