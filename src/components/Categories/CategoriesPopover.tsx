import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryButtonIdPrefix, zIndex } from '../../consts/consts';
import { CategoryPopoverProps } from '../../@types/types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CategoriesPopover: React.FC<CategoryPopoverProps> = ({ categories }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? { subCategories: [] });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '85px',
        left: '100px',
        height: '-webkit-fill-available',
        width: 'fit-content',
        backgroundColor: 'white',
        marginBottom: '20px',
        display: { xs: 'none', md: 'flex' },
        border: '#b2b2b2 1px solid',
        boxShadow: '-1px 1px 1px #cecece',
        zIndex: zIndex.popover,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', borderRight: '#b2b2b2 1px solid', minWidth: '250px' }}>
        {categories.map((category) => (
          <Button
            sx={{ justifyContent: 'space-between' }}
            key={`${categoryButtonIdPrefix}${category.id}`}
            onMouseEnter={() => setSelectedCategory(category)}
          >
            {t(category.label)}
            <IconButton sx={{ padding: 'unset' }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Button>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '250px' }}>
        {selectedCategory.subCategories.map((category) => (
          <Button sx={{ justifyContent: 'flex-start' }} key={`${categoryButtonIdPrefix}${category.id}`}>
            {t(category.label)}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesPopover;
