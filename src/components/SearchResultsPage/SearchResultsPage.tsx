import { Box, IconButton, LinearProgress } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import keys from '../../i18n/keys';
import SortButtonGroup from '../SortButtonGroup/SortButtonGroup';
import { useQuery } from 'react-query';
import fetchData from '../../services/fetchData';
import SearchResult from '../SearchResult/SearchResult';
import { parseResults } from '../../services/parseData';

const SearchResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const [filtersDisplayed, setFiltersDisplayed] = useState(true);
  const [params] = useSearchParams();

  const { data, error, isError, isLoading } = useQuery('searchResults', () => fetchData('searchResults.json'));

  const results = useMemo(() => parseResults(data), [data]);

  const term = params.get('q');

  const toggleFilters = () => setFiltersDisplayed(!filtersDisplayed);

  if (isError) {
    console.error(error);
    return <div>An error occured, please refresh</div>;
  } else
    return isLoading ? (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    ) : (
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
        <section>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
              <div>{t(keys.filters)}</div></Box>
            <Box>
              {results.map((result) => (
                <SearchResult key={result.id} {...result} />
              ))}
            </Box>
          </Box>
        </section>
      </Box>
    );
};

export default SearchResultsPage;
