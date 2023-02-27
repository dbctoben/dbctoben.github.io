import { ToggleButton } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import keys from '../../i18n/keys';
import StyledToggleButtonGroup from '../StyledToggleButtonGroup/StyledToggleButtonGroup';

const SortButtonGroup: React.FC = () => {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const { t } = useTranslation();
  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      size='small'
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'
    >
      <ToggleButton value='left' aria-label='left aligned'>
        {t(keys.mostRelevant)}
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
      {t(keys.mostReviewed)}
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
      {t(keys.highestRated)}
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
      {t(keys.newest)}
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default SortButtonGroup;
