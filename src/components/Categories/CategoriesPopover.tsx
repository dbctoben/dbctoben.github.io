import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryButtonIdPrefix } from '../../consts/consts';
import { CategoryPopoverProps } from '../../consts/types';

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
      }}
    >
      <Box>
        {categories.map((category) => (
          <Button key={`${categoryButtonIdPrefix}${category.id}`} onMouseEnter={() => setSelectedCategory(category)}>
            {t(category.label)}
          </Button>
        ))}
      </Box>
      <Box>
        {selectedCategory.subCategories.map((category) => (
          <Button key={`${categoryButtonIdPrefix}${category.id}`}>{t(category.label)}</Button>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesPopover;
