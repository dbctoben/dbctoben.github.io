import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultsPageProps } from '../../@types/types';
import keys from '../../i18n/keys';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import SortButtonGroup from '../SortButtonGroup/SortButtonGroup';

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ results, term }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <section>
        <Box>
          {results.length} {t(keys.searchResultsTitle)} "{term}"
        </Box>
        <Box>
          <button></button>
          <SortButtonGroup></SortButtonGroup>
        </Box>
      </section>
      <section></section>
    </Box>
  );
};

export default SearchResultsPage;
