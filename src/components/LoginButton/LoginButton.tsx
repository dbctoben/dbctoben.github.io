import { Person } from '@mui/icons-material';
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginButtonProps } from '../../@types/types';
import keys from '../../i18n/keys';

const LoginButton: React.FC<LoginButtonProps> = ({
  anchorElUser,
  settings,
  handleOpenUserMenu,
  handleCloseUserMenu,
}) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 0, alignSelf: 'center', mr: '20px' }}>
      <Tooltip title={t(keys.loginButtonTooltip)}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='User'>
            <Person />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign='center'>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LoginButton;
