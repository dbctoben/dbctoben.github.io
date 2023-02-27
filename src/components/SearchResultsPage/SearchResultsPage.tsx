import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultsPageProps } from '../../@types/types';
import keys from '../../i18n/keys';

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ results, term }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box>
        <Box>
          {results.length} {t(keys.searchResultsTitle)} "{term}"
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default SearchResultsPage;
