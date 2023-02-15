import { Autocomplete, TextField, Box } from '@mui/material';
import React from 'react';
import mockSearchData from '../../consts/mockSearchData';
import keys from '../../i18n/keys';

const SearchInput: React.FC = () => (
  <Autocomplete
    freeSolo
    id='db-search-input'
    disableClearable
    sx={{ flexGrow: 1, maxWidth: 300, display: 'flex', alignItems: 'center' }}
    options={mockSearchData.map((option) => option.label)}
    renderInput={(params) => (
      <TextField
        {...params}
        label={keys.search}
        InputProps={{
          ...params.InputProps,
          type: 'search',
        }}
      />
    )}
  />
);
export default SearchInput;