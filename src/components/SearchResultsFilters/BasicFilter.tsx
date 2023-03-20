import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasicFilterProps } from '../../@types/types';
import keys from '../../i18n/keys';

const BasicFilter: React.FC<BasicFilterProps> = ({ title, children, expanded = false }) => {
    const { t } = useTranslation();
    return (
        <Accordion expanded={expanded}>
            <AccordionSummary>{t(keys[title])}</AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default BasicFilter;