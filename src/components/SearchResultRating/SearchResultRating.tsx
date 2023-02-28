import { Box, Rating, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultProps } from '../../@types/types';
import keys from '../../i18n/keys';

type SearchResultRatingProps = Pick<SearchResultProps, 'rating' | 'ratedBy'>;

const SearchResultRating: React.FC<SearchResultRatingProps> = ({ rating, ratedBy }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography>{rating}</Typography>
      <Rating name='searchResultRating' defaultValue={rating} precision={0.5} readOnly />
      <Typography>
        {t(keys.ratedByPrefix)} {ratedBy} {t(keys.ratedBySuffix)}
      </Typography>
    </Box>
  );
};

export default SearchResultRating;
