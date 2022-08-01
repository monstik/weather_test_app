import { Container, Grid } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const MainLayout = ({ children }: Props) => {
  return (
    <Grid
      sx={{
        backgroundImage:
          "url('https://img4.goodfon.ru/wallpaper/nbig/6/c9/molnii-molniia-shtorm-oblaka-tsiklon-pole-tuchi.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        height: '100vh',
      }}
    >
       
             {children}
      
    </Grid>
  );
};

export default MainLayout;
