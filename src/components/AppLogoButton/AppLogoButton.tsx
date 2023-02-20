import React from 'react';
import { AppLogoButtonProps } from '../../@types/types';

const AppLogoButton: React.FC<AppLogoButtonProps> = ({ minified }) => {
  const src = 'clickClassLogoSmall.png';
  const height = '55px';
  const width = '57px';
  return (
    <a href='/'>
      <img src={src} alt='Brand Logo' height={height} width={width} />
    </a>
  );
};

export default AppLogoButton;
