import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <section>
        <img src='seaDesk.jpg' alt='Woman drinking coffee in the office' width='100%' height='auto' />
        <Box sx={{ position: 'absolute', top: '40%', right: '30%', backgroundColor: 'white', minHeight: '300px', minWidth: '200px'}}>
          <Typography>{t(keys.homePageGreeting)}</Typography>
          <Button>{t(keys.homePageButton)}</Button>
        </Box>
      </section>
      <section>This is the second section</section>
    </Box>
  );
};

export default HomePage;
