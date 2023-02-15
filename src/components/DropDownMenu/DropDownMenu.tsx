import { ThemeProvider } from '@emotion/react';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropDownMenuProps } from '../../consts/types';
import { noTextTransformButton } from '../../services/themes';

const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuTitle, items, anchorEl, handleOpenMenu, handleCloseMenu }) => {
  const { t } = useTranslation();
  console.log('items', items);
  return (
    <>
      <ThemeProvider theme={noTextTransformButton}>
        <Button
          id='db-categories-button'
          aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
          onClick={handleOpenMenu}
        >
          {t(menuTitle)}
        </Button>
      </ThemeProvider>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items &&
          items.map((item) => (
            <MenuItem key={item.id} onClick={handleCloseMenu}>
              {t(item.label)}
              {/* {item.subItems &&
                item.subItems.map((subItem) => (
                  <DropDownMenu
                    menuTitle={subItem.label}
                    items={subItem.subItems}
                    handleCloseMenu={handleCloseMenu}
                    handleOpenMenu={handleOpenMenu}
                    anchorEl={anchorEl}
                  />
                ))} */}
            </MenuItem>
          ))}
        {/* <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Logout</MenuItem> */}
      </Menu>
    </>
  );
};

export default DropDownMenu;
