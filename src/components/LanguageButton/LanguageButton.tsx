import React, { useState } from 'react';
import { Box, Tooltip, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Language } from '../../consts/consts';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';

const LanguageButton: React.FC = () => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (event: React.MouseEvent<HTMLElement>) => {
    i18n.changeLanguage(event.currentTarget.innerText);
    setAnchorElLanguage(null);
  };

  return (
    <Box sx={{ flexGrow: 0, alignSelf: 'center', mr: '10px', ml: '10px' }}>
      <Tooltip title={t(keys.changeLanguage)}>
        <IconButton
          sx={{ alignSelf: 'center' }}
          onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorElLanguage(event.currentTarget)}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='db-language-button-menu'
        anchorEl={anchorElLanguage}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElLanguage)}
        onClose={() => setAnchorElLanguage(null)}
      >
        {Object.keys(Language).map((language) => (
          <MenuItem key={language} onClick={onChangeLanguage}>
            <Typography textAlign='center'>{language}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageButton;
