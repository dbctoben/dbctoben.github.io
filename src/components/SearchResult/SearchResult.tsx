import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultProps } from '../../@types/types';
import keys from '../../i18n/keys';
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
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box>
        <img src={imageSrc} alt={imageAlt} />
      </Box>
      <Box>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Box>
          <SearchResultRating rating={rating} ratedBy={ratedBy} />
          <Box>
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
      <Box></Box>
    </Box>
  );
};

export default SearchResult;
