import React from 'react';
import { AppLogoButtonProps } from '../../@types/types';

const AppLogoButton: React.FC<AppLogoButtonProps> = ({ minified }) => {
  const src = 'sylaboo-logo.png';
  const height = '70px';
  const width = '77px';
  return (
    <a href='/'>
      <img src={src} alt='Brand Logo' height={height} width={width} />
    </a>
  );
};

export default AppLogoButton;
