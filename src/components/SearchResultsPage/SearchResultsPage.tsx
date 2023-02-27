import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import keys from '../../i18n/keys';
import SortButtonGroup from '../SortButtonGroup/SortButtonGroup';

const SearchResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const [filtersDisplayed, setFiltersDisplayed] = useState(true);
  const [params] = useSearchParams();
  const [results, setResults] = useState([]);

  const term = params.get('q');

  const toggleFilters = () => setFiltersDisplayed(!filtersDisplayed);

  return (
    <Box>
      <section>
        <Box>
          {results.length} {t(keys.searchResultsTitle)} "{term}"
        </Box>
        <Box>
          <IconButton sx={{ display: { md: 'none', xs: 'flex' } }} onClick={toggleFilters}>
            {filtersDisplayed ? t(keys.hideFilters) : t(keys.showFilters)}
          </IconButton>
          <SortButtonGroup></SortButtonGroup>
        </Box>
      </section>
      <section></section>
    </Box>
  );
};

export default SearchResultsPage;
