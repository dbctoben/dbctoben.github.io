import { Box } from '@mui/material';
import React from 'react';
import RatingsFilter from './RatingsFilter';

const SearchResultsFilters: React.FC = () => {
  return (
    <Box className='filters-container'>
      <RatingsFilter />
    </Box>
  );
};

export default SearchResultsFilters;
