import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Rating } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingsFilterProps, SingleRatingProps as SingleRatingControlProps } from '../../@types/types';
import keys from '../../i18n/keys';
import BasicFilter from './BasicFilter';
import ratingFilters from './ratings.consts';

const RatingsFilter: React.FC<RatingsFilterProps> = ({ ratings = [] }) => {
  const [value, setValue] = useState(`${ratingFilters.slice(-1)[0].minimum}`);
  const { t } = useTranslation();
  const SingleRatingControl: React.FC<SingleRatingControlProps> = ({ rating }) => (
    <Box className='single-rating-control'>
      <FormControlLabel value={`${rating.minimum}`} control={<Radio />} label='' />
      <Rating className='single-rating-stars' name={`${t(keys.atLeast)} ${rating.minimum}`} defaultValue={rating.minimum} precision={0.5} readOnly />
    </Box>
  );

  return (
    <BasicFilter title={keys.ratingsFilterTitle} expanded={true}>
      <Box>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={value}
            onChange={(val) => setValue(val.currentTarget.value)}
          >
            {ratingFilters.map((rating) => (
              <SingleRatingControl rating={rating} />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </BasicFilter>
  );
};

export default RatingsFilter;
