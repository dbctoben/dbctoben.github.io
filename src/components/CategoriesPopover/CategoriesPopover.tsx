import { Box, Button } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryButtonIdPrefix } from '../../consts/consts';
import { Category } from '../../consts/types';

type CategoryPopoverProps = { categories: Array<Category> };

const CategoriesPopover: React.FC<CategoryPopoverProps> = ({ categories }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0] ?? { subCategories: [] });
  //   const primaryCategories = useMemo(() => categories.map((category) => category.label), [categories]);
  //   const secondaryCategories = useMemo(
  //     () => selectedCategory.subCategories.map((subCategory) => subCategory.label),
  //     [selectedCategory]
  //   );

  return (
    <Box>
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
