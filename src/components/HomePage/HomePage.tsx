import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <section>
        <img src='seaDeskSmall.png' alt='Relaxed person sits on a desk in the beach' width='100%' height='auto' />

        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            backgroundColor: 'white',
            minHeight: '300px',
            minWidth: '200px',
            boxShadow: '-2px 2px 2px gray',
            padding: '15px',
            maxWidth: '30%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h3' fontFamily='serif' fontWeight='bold'>{t(keys.homePageGreetingTitle)}</Typography>
          <Typography variant='h5'>{t(keys.homePageGreetingContent)}</Typography>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Button sx={{ alignSelf: 'flex-end' }}>{t(keys.homePageButton)}</Button>
          </Box>
        </Box>
      </section>
      <section>This is the second section</section>
    </Box>
  );
};

export default HomePage;
