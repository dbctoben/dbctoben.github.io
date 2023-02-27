import { Autocomplete, TextField, Box } from '@mui/material';
import React, { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import mockSearchData from '../../consts/mockSearchData';
import i18n from '../../i18n/config';
import keys from '../../i18n/keys';

type inputRefCurrent = {
  dir: 'ltr' | 'rtl';
};

const SearchInput: React.FC = () => {
  const { t } = useTranslation();
  const inputRef = createRef();

  useEffect(() => {
    if (inputRef) {
      (inputRef.current as inputRefCurrent).dir = i18n.dir();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.dir()]);

  return (
    <Autocomplete
      freeSolo
      id='db-search-input'
      disableClearable
      sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', margin: '0 20px' }}
      options={mockSearchData.map((option) => option.label)}
      renderInput={(params) => (
        <TextField
          inputRef={inputRef}
          {...params}
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          placeholder={t(keys.search) ?? 'Search'}
        />
      )}
    />
  );
};
export default SearchInput;
