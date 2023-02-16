import { ClickAwayListener, Box, Button } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { createPortal } from 'react-dom';
import { CategoriesProps } from '../../consts/types';
import keys from '../../i18n/keys';
import CategoriesPopover from './CategoriesPopover';

const Categories: React.FC<CategoriesProps> = ({
  categories,
  categoriesDisplayed,
  portalRef,
  closeCategories,
  toggleCategories,
}) => {
  return (
    <ClickAwayListener onClickAway={closeCategories}>
      <Box sx={{ display: 'flex' }}>
        <Button onClick={toggleCategories}>{t(keys.categories)}</Button>
        {categoriesDisplayed && portalRef?.current
          ? createPortal(<CategoriesPopover categories={categories} />, portalRef.current)
          : null}
      </Box>
    </ClickAwayListener>
  );
};

export default Categories;
