import { Box } from '@mui/material';
import React from 'react';
import keys from '../../i18n/keys';
import BasicFilter from './BasicFilter';

type RatingsData = {
    level: number;
    numOfVotes: number;
}

type RatingsFilterProps = { 
    ratings: Array<RatingsData>;
 }

const RatingsFilter: React.FC<RatingsFilterProps> = ({ ratings }) => {
    return (
        <BasicFilter title={keys.ratingsFilter}>
            <Box>

            </Box>
        </BasicFilter>
    );
};

export default RatingsFilter;