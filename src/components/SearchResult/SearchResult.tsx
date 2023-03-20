import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultProps } from '../../@types/types';
import keys from '../../i18n/keys';
import { getCurrencyIconClass } from '../../services/currencyIcon';
import SearchResultRating from '../SearchResultRating/SearchResultRating';

const SearchResult: React.FC<SearchResultProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  author,
  rating,
  ratedBy,
  totalTime,
  numOfLectures,
  level,
  numOfExcercises,
  numOfTests,
  authorizedCertificate,
  price,
  salePrice,
  currency,
}) => {
  const { t } = useTranslation();
  return (
    <Box className='search-result' sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ mr: '10px' }}>
        <img src={imageSrc} alt={imageAlt} width='250px' height='150px' />
      </Box>
      <Box sx={{ maxWidth: '50%' }}>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{author}</Typography>
        <Box>
          <SearchResultRating rating={rating} ratedBy={ratedBy} />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography>
              {totalTime} {t(keys.searchResultTime)}
            </Typography>
            |
            <Typography>
              {numOfLectures} {t(keys.searchResultLectures)}
            </Typography>
            |
            <Typography>
              {numOfTests} {t(keys.searchResultTests)}
            </Typography>
            |<Typography>{level}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography>
            {salePrice} <i className={getCurrencyIconClass(currency)}></i>
          </Typography>
          <Typography>
            {price} <i className={getCurrencyIconClass(currency)}></i>
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default SearchResult;
