import { ClickAwayListener, Box, Button, Popover } from '@mui/material';
import { t } from 'i18next';
import React, { useState } from 'react';
import { CategoriesProps } from '../../@types/types';
import keys from '../../i18n/keys';
import CategoriesPopover from './CategoriesPopover';

const Categories: React.FC<CategoriesProps> = ({
  categories,
  anchorElCategories,
  handleOpenCategories,
  handleCloseCategories,
}) => {
  const [categoriesDisplayed, setCategoriesDisplayed] = useState(false);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (categoriesDisplayed) {
      onClose();
    } else {
      setCategoriesDisplayed(true);
      handleOpenCategories(event);
      console.log('event', event);
    }
  };

  const onClose = () => {
    setCategoriesDisplayed(false);
    handleCloseCategories();
  };

  return (
    <ClickAwayListener onClickAway={() => setCategoriesDisplayed(false)}>
      <Box sx={{ display: 'flex', ml: '20px' }}>
        <Button sx={{ margin: '0 10px' }} onClick={onClick}>
          {t(keys.categories)}
        </Button>
        <Popover
          sx={{ minWidth: 0, '& .MuiPaper-root': { boxShadow: 'none', backgroundColor: 'transparent' } }}
          onClose={onClose}
          anchorEl={anchorElCategories}
          open={categoriesDisplayed}
        >
          <CategoriesPopover categories={categories} />
        </Popover>
      </Box>
    </ClickAwayListener>
  );
};

export default Categories;
