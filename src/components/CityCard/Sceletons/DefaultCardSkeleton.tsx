import { Box, Card, CardContent, Skeleton } from '@mui/material';
import React from 'react';


const DefaultCardSkeleton = () => {
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
          <Skeleton sx={{ width: '60%' }} animation='wave' />
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
            <Skeleton variant='circular' width={56} height={56} />
            <Skeleton
              width={125}
              height={16}
              sx={{ marginTop: '5px' }}
              animation='wave'
            />
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
              <Skeleton width={100} animation='wave' />

              <Skeleton animation='wave' />

              <Skeleton animation='wave' />

              <Skeleton animation='wave' />
            </Box>

            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '6px' }}
            >
              <Skeleton width={100} animation='wave' />

              <Skeleton animation='wave' />

              <Skeleton animation='wave' />

              <Skeleton animation='wave' />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DefaultCardSkeleton;
