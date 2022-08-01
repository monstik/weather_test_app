import { Card, CardContent, Box, Skeleton } from '@mui/material';
import React from 'react';

const MinimalistikCardSkeleton = () => {
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '10px',
          }}
        >
          <Skeleton sx={{
            height: '25px',
            width: '80%'
          }} animation={'wave'} />
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
            <Skeleton width={75} animation={'wave'} />
            <Skeleton animation={'wave'} />
            <Skeleton animation={'wave'} />
            <Skeleton animation={'wave'} />
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
            <Skeleton variant='circular' width={56} height={56} />
            <Skeleton sx={{marginTop: '5px'}} width={65} height={14} animation={'wave'} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MinimalistikCardSkeleton;
