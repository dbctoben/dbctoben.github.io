import React from 'react';
import { AppLogoButtonProps } from '../../@types/types';

const AppLogoButton: React.FC<AppLogoButtonProps> = ({ minified }) => {
  const src = 'sylaboo.png';
  const height = '75px';
  const width = '77px';
  return (
    <a href='/'>
      <img src={src} alt='Brand Logo' height={height} width={width} />
    </a>
  );
};

export default AppLogoButton;
